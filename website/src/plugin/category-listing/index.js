module.exports = async function myPlugin(context, options) {
    // ...
    return {
      name: 'category-listing',
      async loadContent() {
      },
      async contentLoaded({content, actions, allContent}) {
        const {setGlobalData, addRoute} = actions;
        const allVersions = allContent['docusaurus-plugin-content-docs']['default']['loadedVersions'];
        allVersions.forEach(version => {
            const docs = version.docs;

            // build the mapping of tags to docs
            const tagToDocMap = {};
            docs.forEach(doc => {
                const tagNames = doc.tags.map(t => t.label);
                tagNames.forEach(tn => {
                    const collection = tagToDocMap[tn] ?? [];

                    const shortForm = {
                        title: doc.title,
                        permalink: doc.permalink,
                        description: doc.description
                    }

                    collection.push(shortForm);
                    tagToDocMap[tn]=collection;
                })    
            });

            // add the mapping to global data
            setGlobalData(tagToDocMap)
        })
      },
      /* other lifecycle API */
    };
  };