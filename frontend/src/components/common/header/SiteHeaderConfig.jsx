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
                hasSubMenu: false
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
                hasSubMenu: false
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
                hasSubMenu: false
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
                hasSubMenu: false
            },
        },
    ] 
}

export default siteHeaderConfig
  