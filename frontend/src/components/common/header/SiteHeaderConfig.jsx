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
                translationFallback: "Homepage",
            },
            siteHeaderMenuSection: {
                key: "sHMS_", 
                hasSubMenu: true, 
                subMenuNavItem: [
                    {
                        key: "sHSMNI_", 
                        label: "League Of Legends", 
                        description: "unsere League Of Legends Teams ein einem Blick"
                    },
                    {
                        key: "sHSMNI_", 
                        label: "Valorant", 
                        description: "unsere Valorant Teams ein einem Blick"
                    },
                ],
                subMenuSection: [
                    {
                    key: "sHSMS_", 
                    siteNavItemList: [
                        {
                            key: "sHSMNIL_", 
                            siteNavItem: [
                                {
                                    key: "sHSMNI_", 
                                    label: "SLR Solaris Esports", 
                                    description: "Unser erstes Main Team", 
                                    image: "", 
                                    imageAlt: "logo", 
                                    link: ""
                                },
                                {
                                    key: "sHSMNI_", 
                                    label: "SLR Solaris Esports", 
                                    description: "Unser erstes Main Team", 
                                    image: "",
                                    imageAlt: "logo", 
                                    link: ""
                                },
                                {
                                    key: "sHSMNI_", 
                                    label: "SLR Solaris Esports", 
                                    description: "Unser erstes Main Team", 
                                    image: "", 
                                    imageAlt: "logo", 
                                    link: ""
                                },
                            ]
                        },
                        {
                            key: "sHSMNIL_", 
                            siteNavItem: [
                                {
                                    key: "sHSMNI_", 
                                    label: "SLR Solaris Esports", 
                                    description: "Unser erstes Main Team", 
                                    image: "", 
                                    imageAlt: "logo", 
                                    link: ""
                                },
                            ]
                        },
                        {
                            key: "sHSMNIL_", 
                            siteNavItem: [
                                {
                                    key: "sHSMNI_", 
                                    label: "SLR Solaris Esports", 
                                    description: "Unser erstes Main Team", 
                                    image: "", 
                                    imageAlt: "logo", 
                                    link: ""
                                },
                            ]
                        },
                    ]
                    },
                    {
                        key: "sHSMS_", 
                        siteNavItemList: [
                            {
                                key: "sHSMNIL_", 
                                siteNavItem: [
                                    {
                                        key: "sHSMNI_", 
                                        label: "SLR Solaris Esports", 
                                        description: "Unser erstes Main Team", 
                                        image: "", 
                                        imageAlt: "logo", 
                                        link: ""
                                    },
                                ]
                            },
                        ]
                    },
                ],
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
  