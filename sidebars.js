// module.exports = {
//     someSidebar: {
//         Docusaurus: ["doc1", "doc2", "doc3"],
//         Features: ["mdx"],
//     },
// };


module.exports = {
    docs: [{
            type: "doc",
            id: "how_to_start",
        },
        {
            type: "doc",
            id: "overview",
        },
        {
            type: "category",
            label: "API",
            // collapsed: false,
            items: [
                "api/overview",
                "api/methods",
                "api/events_bus",
                "api/events",
                "api/properties",

                // {
                //     type: "category",
                //     label: "Methods",
                //     items: [
                //         "api/richtext_destructor",
                //         "api/richtext_exitfullscreen",
                //         "api/richtext_fullscreen",
                //         "api/richtext_geteditorapi",
                //         "api/richtext_getvalue",
                //         "api/richtext_getstats",
                //         "api/richtext_paint",
                //         "api/richtext_setvalue"
                //     ],
                // }

            ],
        },
        {
            type: "doc",
            id: "whats_new",
        },
        {
            type: "category",
            label: "Guides",
            collapsed: false,
            items: [
                "guides/initialization",
                "guides/configuration",
                "guides/localization",
                "guides/loading_data",
                "guides/working_with_richtext",
                "guides/customization",
                "guides/event_handling",
                "guides/react_integration",
                "guides/angular_integration",
                "guides/vuejs_integration",

            ],
        },
    ],
}