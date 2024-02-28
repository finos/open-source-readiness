module.exports = async function myPlugin(context, options) {
    // ...
    return {
      name: 'checklist-listing',
      async loadContent() {
      },
      async contentLoaded({content, actions, allContent}) {
        const {setGlobalData, addRoute} = actions;
        const allVersions = allContent['docusaurus-plugin-content-docs']['default']['loadedVersions'];
        allVersions.forEach(version => {
            const docs = version.docs;

            // build the mapping of checklists
            const checklistItems = [];
            docs.forEach(doc => {
                const title = doc.title
                const checklist = doc.frontMatter.checklist
                if (checklist) {
                  checklistItems.push({
                    title: title,
                    checklist: checklist,
                    id: doc.id,
                    tags: doc.tags
                  })
                }
            });

            // add the mapping to global data
            setGlobalData(checklistItems)
        })
      }
    };
  };