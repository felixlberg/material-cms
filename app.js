var path = require('path');

var apos = require('apostrophe')({
  shortName: 'material-cms-workflow',
  modules: {
    // Ordering Module for Pieces
    'apostrophe-pieces-orderings-bundle': {},
    // Custom Modules
    'card-widgets': {},
    'contact-form': {},
    'contact-form-widgets': {},
    'btn-widgets':{},
    'double-widgets': {},
    'events': {},
    'events-widgets': {},
    'footer-widgets':{},
    'galleries':{
      orderings: true
    },
    'galleries-orderings': {
      extend: 'apostrophe-pieces-orderings'
    },
    'galleries-pages': {
      orderings: true
    },
    'galleries-widgets': {},
    'nav-widgets': {},
    'people': {
      ordering: true
    },
    'people-orderings': {
      extend: 'apostrophe-pieces-orderings'
    },
    'people-pages': {
      orderings: true
    },
    'people-widgets': {},
    'sections': {
      orderings: true
    },
    'sections-orderings': {
      extend: 'apostrophe-pieces-orderings'
    },
    'sections-pages': {
      orderings: true
    },
    'sections-widgets': {},
    'share-widgets':{},
    'slider-widgets':{},
    'swiper-widgets':{},
    'tables': {
      orderings: true
    },
    'tables-orderings': {
      extend: 'apostrophe-pieces-orderings'
    },
    'tables-pages': {
      orderings: true
    },
    'tables-widgets': {},
    'texts': {
      orderings: true
    },
    'texts-orderings': {
      extend: 'apostrophe-pieces-orderings'
    },
    'texts-pages': {
      orderings: true
    },
    'texts-carousels-widgets': {},
    'texts-widgets': {},
    'video-widgets': {},

    // CSS in context editing
    'apostrophe-palette-widgets': {},
    'apostrophe-palette': {},
    'apostrophe-palette-global': {},

    // Production Modules
    'apostrophe-db': {
      connect: {
        useUnifiedTopology: true
      }
    },
    'apostrophe-caches-redis': {},
    'apostrophe-caches': {
      redis: {}
    },
    'apostrophe-seo': {},
    'apostrophe-open-graph': {},
    'apostrophe-global': {
      seoGoogleFields: true
    },
    'apostrophe-site-map': {
      noPriority: true,
      excludeTypes: [
        'apostrophe-global',
        'contact-form'

      ],
      childPageDepth: 3
    },
    'apostrophe-optimizer': {
      enable: false,
      stats: false,
      debug: false
    },
    'apostrophe-favicons': {},
    'apostrophe-favicons-global': {
      destinationDir: '/fav/',
      faviconConfig : {
        icons: {
          windows: false
        }
      }
    },
    // Lean frontend
    'apostrophe-assets': {
      lean: true
    },
    'apostrophe-video-widgets': {
      player: true
    },
    // Serve Attacments over SSL only
    'apostrophe-attachments': {
      uploadfs: {
        https: true
      }
    },
    // Allow svgs
    'apostrophe-attachments': {
      svgImages: true,
      /*
      addImageSizes: [{
        name: 'side',
        width: 380,
        height: 600
      }]
      */
    },
    // Forms
    'apostrophe-forms': {
      disableBaseStyles: true,
      optionLabelPosition: 'last'
    },
    'apostrophe-forms-widgets': {},
    'apostrophe-forms-text-field-widgets': {},
    'apostrophe-forms-textarea-field-widgets': {},
    'apostrophe-forms-file-field-widgets': {},
    'apostrophe-forms-select-field-widgets': {},
    'apostrophe-forms-radio-field-widgets': {},
    'apostrophe-forms-checkboxes-field-widgets': {},
    'apostrophe-forms-boolean-field-widgets': {},
    'apostrophe-forms-conditional-widgets': {},
    // Templates
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    // Apostrophe Workflow module
    'apostrophe-workflow': {
      locales: [
        {
          name: 'default',
          label: 'Deutsch',
          children: [
            {
              name: 'en-gb',
              label: 'England'
            },
            {
              name: 'fr',
              label: 'Frankreich'
            },
            {
              name: 'sp',
              label: 'Spanien'
            },
          ]
        },
      ],
      exportAfterCommit: false,
      defaultLocale: 'de-de',
      alias: 'workflow',
      replicateAcrossLocales: false
    },
    'apostrophe-workflow-modified-documents': {},

  // << End of Modules
  }
});
