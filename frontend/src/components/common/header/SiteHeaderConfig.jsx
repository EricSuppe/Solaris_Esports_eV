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
                displayValue: "Startseite"
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
                subMenuFooter: {
                    key: "sHSMF_",
                    label: "",
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
                displayValue: "News"
            },
            siteHeaderMenuSection: {
                key: "sHMS_", 
                hasSubMenu: false,
                hasFooter: true,
                subMenuFooter: {
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
                displayValue: "Verein"
            },
            siteHeaderMenuSection: {
                key: "sHMS_", 
                hasSubMenu: false,
                hasFooter: true,
                subMenuFooter: {
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
                displayValue: "Teams"
            },
            siteHeaderMenuSection: {
                key: "sHMS_",
                hasSubMenu: false,
                hasFooter: true,
                subMenuFooter: {
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
                displayValue: "Community"
            },
            siteHeaderMenuSection: {
                key: "sHMS_", 
                hasSubMenu: false,
                hasFooter: true,
                subMenuFooter: {
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
  