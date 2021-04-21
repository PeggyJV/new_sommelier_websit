/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve('src/templates/blog-entry.js')
    const jobsEntry = path.resolve('src/templates/job-entry.js')

    resolve(
      graphql(
        `{
          stories: allStoryblokEntry(filter: {field_component: {eq: "blogpost"}}) {
            edges {
              node {
                id
                name
                slug
                field_component
                full_slug
                content
              }
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const entries = result.data.stories.edges
        entries.forEach((entry) => {
          console.log('^^^^^^^^^^^^^^^^^^');
          console.log(entry.node.full_slug);
          console.log('^^^^^^^^^^^^^^^^^^');
          if(entry.node.full_slug == 'jobs/jobs') {
            const page = {
              path: `/jobs`,
              component: jobsEntry,
              context: {
                story: entry.node
              }
            }
            createPage(page)
          } else {
            if(entry.node.full_slug.includes('blog/')) {
              const page = {
                path: `/${entry.node.full_slug}`,
                component: storyblokEntry,
                context: {
                  story: entry.node
                }
              }
              createPage(page);
              console.log('blog added');
              console.log('**********')
            }
          }
        })
      })
    )
  })
}
