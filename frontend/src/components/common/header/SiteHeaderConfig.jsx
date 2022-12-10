import siteHeaderSubMenuNews from "./components/news/SiteHeaderSubMenuNews"

const siteHeaderConfig = {
    ctaButton: {
        label: "Mitglied werden",
        link: "",
    },
    config: [
        {
            key: "sHCI_", 
            siteHeaderNavItem: {
                key: "sHNI_", 
                hasPopup: true, 
                translationKey: "siteHeader.nav.item.home",
                translationFallback: "Abteilungen",
            },
            siteHeaderMenuSection: {
                key: "sHMS_", 
                hasSubMenu: true, 
                subMenuNavItem: [
                    {
                        key: "sHSMNI_", 
                        label: {
                            translationKey: "siteHeader.menu.nav.item.teams.label",
                            translationFallback: "", 
                        },
                        description: {
                            translationKey: "siteHeader.menu.nav.item.teams.description",
                            translationFallback: "", 
                        }
                    },
                    {
                        key: "sHSMNI_", 
                        label: {
                            translationKey: "siteHeader.menu.nav.item.esport.label",
                            translationFallback: "", 
                        },
                        description: {
                            translationKey: "siteHeader.menu.nav.item.esport.description",
                            translationFallback: "", 
                        }
                    },
                ],
                subMenuSection: 
                    {
                        key: "sHSMS_", 
                        components: [
                            {
                                key: "sHSMC_",
                                component: "undefined",

                            },
                            {
                                key: "sHSMC_",
                                component: siteHeaderSubMenuNews,

                            },
                        ]
                    },
                
                hasFooter: false,
            },
        },






















































        {
            key: "sHCI_", 
            siteHeaderNavItem: {
                key: "sHNI_", 
                hasPopup: true, 
                translationKey: "siteHeader.nav.item.news",
                translationFallback: "News",
            },
            siteHeaderMenuSection: {
                key: "sHMS_", 
                hasSubMenu: false,
                menuBody: {
                    key: "sHSMB_",
                },
                hasFooter: true,
                menuFooter: {
                    key: "sHSMF_",
                    label: "NewsNav",
                    siteNavItemList: [
                        {
                            key: "sHSMFIL_",
                            siteNavItem: [
                                {
                                    key: "sHSMFI_",
                                    label: "Twitter",
                                    link: "/twitter"
                                },
                                {
                                    key: "sHSMFI_",
                                    label: "Discord",
                                    link: "/discord"
                                },
                            ],
                        },
                        {
                            key: "sHSMFIL_",
                            siteNavItem: [
                                {
                                    key: "sHSMFI_",
                                    label: "Youtube",
                                    link: "/youtube"
                                },
                                {
                                    key: "sHSMFI_",
                                    label: "Instagram",
                                    link: "/instagram"
                                },
                            ],
                        },
                    ],
                },
            },
        },
        {
            key: "sHCI_", 
            siteHeaderNavItem: {
                key: "sHNI_", 
                hasPopup: true, 
                translationKey: "siteHeader.nav.item.association",
                translationFallback: "Association",
            },
            siteHeaderMenuSection: {
                key: "sHMS_", 
                hasSubMenu: false,
                menuBody: {
                    key: "sHSMB_",
                },
                hasFooter: true,
                menuFooter: {
                    key: "sHSMF_",
                    label: "VereinNav",
                    siteNavItemList: [
                        {
                            key: "sHSMFIL_",
                            siteNavItem: [
                                {
                                    key: "sHSMFI_",
                                    label: "Twitter",
                                    link: "/twitter"
                                },
                                {
                                    key: "sHSMFI_",
                                    label: "Discord",
                                    link: "/discord"
                                },
                            ],
                        },
                        {
                            key: "sHSMFIL_",
                            siteNavItem: [
                                {
                                    key: "sHSMFI_",
                                    label: "Youtube",
                                    link: "/youtube"
                                },
                                {
                                    key: "sHSMFI_",
                                    label: "Instagram",
                                    link: "/instagram"
                                },
                            ],
                        },
                    ],
                },
            },
        },
        {
            key: "sHCI_", 
            siteHeaderNavItem: {
                key: "sHNI_", 
                hasPopup: true, 
                translationKey: "siteHeader.nav.item.teams",
                translationFallback: "Teams",
            },
            siteHeaderMenuSection: {
                key: "sHMS_",
                hasSubMenu: false,
                menuBody: {
                    key: "sHSMB_",
                },
                hasFooter: true,
                menuFooter: {
                    key: "sHSMF_",
                    label: "TeamNav",
                    siteNavItemList: [
                        {
                            key: "sHSMFIL_",
                            siteNavItem: [
                                {
                                    key: "sHSMFI_",
                                    label: "Twitter",
                                    link: "/twitter"
                                },
                                {
                                    key: "sHSMFI_",
                                    label: "Discord",
                                    link: "/discord"
                                },
                            ],
                        },
                        {
                            key: "sHSMFIL_",
                            siteNavItem: [
                                {
                                    key: "sHSMFI_",
                                    label: "Youtube",
                                    link: "/youtube"
                                },
                                {
                                    key: "sHSMFI_",
                                    label: "Instagram",
                                    link: "/instagram"
                                },
                            ],
                        },
                    ],
                },  
            },
        },
        {
            key: "sHCI_", 
            siteHeaderNavItem: {
                key: "sHNI_", 
                hasPopup: true, 
                translationKey: "siteHeader.nav.item.community",
                translationFallback: "Community",
            },
            siteHeaderMenuSection: {
                key: "sHMS_", 
                hasSubMenu: false,
                menuBody: {
                    key: "sHSMB_",
                    label: "CommunityNav",
                    header: {
                        key: "sHSMBH_",
                        siteNavItemList: [
                            {
                                key: "sHSMBHL_",
                                siteNavItem: [
                                    {
                                        key: "sHSMBHLI_",
                                        label: "Überschrift",
                                        link: "/twitter"
                                    },
                                ]
                            },
                        ]
                    },
                    siteNavItemList: [
                        {
                            key: "sHSMBHL_",
                            label: "jetz starten",
                            siteNavItem: [
                                {
                                    key: "sHSMBHLI_",
                                    label: "gegenstand1",
                                    link: "/twitter"
                                },
                                {
                                    key: "sHSMBHLI_",
                                    label: "gegenstand1",
                                    link: "/twitter"
                                },
                                {
                                    key: "sHSMBHLI_",
                                    label: "gegenstand1",
                                    link: "/twitter"
                                },
                            ]
                        },
                        {
                            key: "sHSMBHL_",
                            label: "starten",
                            siteNavItem: [
                                {
                                    key: "sHSMBHLI_",
                                    label: "gegenstand2",
                                    link: "/twitter"
                                },
                                {
                                    key: "sHSMBHLI_",
                                    label: "gegenstand2",
                                    link: "/twitter"
                                },
                                {
                                    key: "sHSMBHLI_",
                                    label: "gegenstand2",
                                    link: "/twitter"
                                },
                                {
                                    key: "sHSMBHLI_",
                                    label: "gegenstand2",
                                    link: "/twitter"
                                },
                            ]
                        },
                    ],
                },
                hasFooter: true,
                menuFooter: {
                    key: "sHSMF_",
                    label: "CommunityNav",
                    siteNavItemList: [
                        {
                            key: "sHSMFIL_",
                            siteNavItem: [
                                {
                                    key: "sHSMFI_",
                                    label: "Twitter",
                                    link: "/twitter"
                                },
                                {
                                    key: "sHSMFI_",
                                    label: "Discord",
                                    link: "/discord"
                                },
                            ],
                        },
                        {
                            key: "sHSMFIL_",
                            siteNavItem: [
                                {
                                    key: "sHSMFI_",
                                    label: "Youtube",
                                    link: "/youtube"
                                },
                                {
                                    key: "sHSMFI_",
                                    label: "Instagram",
                                    link: "/instagram"
                                },
                            ],
                        },
                    ],
                }, 
            },
        },
    ] 
}

export default siteHeaderConfig
  