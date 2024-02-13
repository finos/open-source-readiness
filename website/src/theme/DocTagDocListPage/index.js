import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  usePluralForm,
} from '@docusaurus/theme-common';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import SearchMetadata from '@theme/SearchMetadata';
// Very simple pluralization: probably good enough for now
function useNDocsTaggedPlural() {
  const {selectMessage} = usePluralForm();
  return (count) =>
    selectMessage(
      count,
      translate(
        {
          id: 'theme.docs.tagDocListPageTitle.nDocsTagged',
          description:
            'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One doc tagged|{count} docs tagged',
        },
        {count},
      ),
    );
}
function DocItem({doc}) {
  return (
    <article className="margin-vert--lg">
      <Link to={doc.permalink}>
        <h3>{doc.title}</h3>
      </Link>
      {doc.description && <p>{doc.description}</p>}
    </article>
  );
}

const categoryStubs = [ 'Risks', 'Regulations', 'Roles', 'OSMM', 'Activities', 'Certifications', 'Training', 'Artifacts', 'InnerSource', 'osr-resources'];

function sortDocs(items, exclude) {
  const out = {}

  items
    .filter(i => i !== exclude)
    .forEach(i => {
    categoryStubs.forEach(c => {
      if (i.permalink.indexOf('/'+c+'/') > -1) {
        const list = out[c];
        if (!list) {
          out[c] = [];
        }

        out[c].push(i);
      }
    })

    return out;
  })

  return out;

}

function mainDoc(tag) {
  const index = tag.label.indexOf(" (");
  if (index > -1) {
    const tagWithoutBracket = tag.label.substr(0, index);
    tag.items.forEach(t => {
      if (t.title.indexOf(tagWithoutBracket) > -1) {
        return t;
      }
    })
  }

  return null;
}

export default function DocTagDocListPage({tag}) {
  const nDocsTaggedPlural = useNDocsTaggedPlural();
  const md = mainDoc(tag);
  const sorted = sortDocs(tag.items, md);
  const title = translate(
    {
      id: 'theme.docs.tagDocListPageTitle',
      description: 'The title of the page for a docs tag',
      message: '{nDocsTagged} with "{tagName}"',
    },
    {nDocsTagged: nDocsTaggedPlural(tag.count), tagName: tag.label},
  );
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.docsPages,
        ThemeClassNames.page.docsTagDocListPage,
      )}>
      <PageMetadata title={title} />
      <SearchMetadata tag="doc_tag_doc_list" />
      <Layout>
        <div className="container margin-vert--lg">
          <div className="row">
            <main className="col col--8 col--offset-2">
              <header className="margin-bottom--xl">
                <h1>{title}</h1>
                <Link href={tag.allTagsPath}>
                  <Translate
                    id="theme.tags.tagsPageLink"
                    description="The label of the link targeting the tag list page">
                    View All Tags
                  </Translate>
                </Link>
              </header>
              {md ? <DocItem id={-1} doc={md} /> : ""}
              {categoryStubs
                .filter(k => sorted[k])
                .map(k=> <section className="margin-vert--lg">
                <h2>{k}</h2>
                {sorted[k].map((doc, i) => <DocItem id={i} doc={doc} />)}
              </section>)}
            </main>
          </div>
        </div>
      </Layout>
    </HtmlClassNameProvider>
  );
}
