const en = {
  navigation: {
    '/about': {
      title: 'About Fosmarin',
      sections: {
        'project-overview': 'Project Overview',
        'mission-and-vision': 'Mission & Vision',
        objectives: 'Objectives',
        impact: 'Impact',
        'eu-funding': 'EU Funding',
        'consortium-at-a-glance': 'Consortium at a Glance',
      },
    },

    '/challenge': {
      title: 'The Challenge',
      sections: {
        'threats-to-subsea-cables': 'Threats to Subsea Cables',
        'global-context': 'Global Context',
        'current-gaps': 'Current Gaps',
        'why-action-is-needed': 'Why Action is Needed',
        'the-cost-of-inaction': 'The Cost of Inaction',
        'policy-and-eu-actions': 'Policy & EU Actions',
      },
    },

    '/use-cases': {
      title: 'Use Cases',
      sections: {
        'telecom-cables-protection': 'Telecom Cables Protection',
        'power-cables-monitoring': 'Power Cables Monitoring',
        'offshore-wind-farms': 'Offshore Wind Farms',
        'pipelines-monitoring': 'Pipelines Monitoring',
        'ports-and-harbours': 'Ports & Harbours',
        'shallow-water-monitoring': 'Shallow Water Monitoring',
        'search-and-rescue-support': 'Search & Rescue Support',
      },
    },

    '/technology': {
      title: 'Technology',
      sections: {
        'fibre-optic-acoustic-sensing':
          'Fibre Optic Acoustic Sensing (FOAS)',
        'how-it-works': 'How It Works',
        'using-dark-fibre-in-existing-cables':
          'Using Dark Fibre in Existing Cables',
        'multi-parameter-monitoring':
          'Multi-Parameter Monitoring',
        'predictive-analytics-and-ai':
          'Predictive Analytics & AI',
        'system-architecture-and-components':
          'System Architecture & Components',
        'data-processing-and-algorithms':
          'Data Processing & Algorithms',
        'integration-interoperability-and-security':
          'Integration, Interoperability & Security',
      },
    },

    '/consortium': {
      title: 'Consortium',
      sections: {
        partners: 'Partners',
        'partner-map': 'Partner Map',
        'roles-and-contributions': 'Roles & Contributions',
        'advisory-board': 'Advisory Board',
        'authorities-and-stakeholders':
          'Authorities & Stakeholders',
      },
    },

    '/news': {
      title: 'News & Events',
      sections: {
        'latest-news': 'Latest News',
        events: 'Events',
        'press-releases': 'Press Releases',
        'media-gallery': 'Media Gallery',
        webinars: 'Webinars',
      },
    },

    '/resources': {
      title: 'Resources',
      sections: {
        publications: 'Publications',
        deliverables: 'Deliverables',
        reports: 'Reports',
        presentations: 'Presentations',
        videos: 'Videos',
        brochures: 'Brochures',
        newsletter: 'Newsletter',
        faqs: 'FAQs',
      },
    },

    '/contact': {
      title: 'Contact',
      sections: {
        'contact-form': 'Contact Form',
        'get-in-touch': 'Get in Touch',
        'social-media-links': 'Social Media Links',
      },
    },
  },

  header: {
    primaryNavigation: 'Primary navigation',
    toggleNavigation: 'Toggle navigation',
    selectLanguage: 'Select language',
    languageMenu: 'Language',
    sections: 'sections',
    switchLanguageTo: 'Switch language to',
  },

  footer: {
    about: 'About Fosmarin',
    quickLinks: 'Quick Links',
    resources: 'Resources',
    followUs: 'Follow Us',
    contact: 'Contact',

    aboutNavigation:
      'About Fosmarin footer navigation',
    quickLinksNavigation:
      'Quick links footer navigation',
    resourcesNavigation:
      'Resources footer navigation',

    euLogoAlt:
      'Funded by the European Union',

    grant:
      'The project is funded by the EU under 101309039 — FOSMARIN — HORIZON-CL3-2025-01 grant agreement.',

    disclaimer:
      'Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or European Research Executive Agency. Neither the European Union nor the European Research Executive Agency can be held responsible for them.',

    copyright:
      '© 2026 FOSMARIN CONSORTIUM',

    tagline:
      'FOAS · PREDICTIVE ANALYTICS · SUBSEA RESILIENCE',
  },

  home: {
    hero: {
      eyebrow:
        'EU-funded · Subsea infrastructure resilience',

      titleBefore:
        'A glass thread on the seabed can now ',

      titleEmphasis: 'hear',

      titleAfter:
        ' everything above it.',

      lead:
        'FOSMARIN turns existing subsea fibre-optic cables into thousands of virtual underwater listening points — using Fibre Optic Acoustic Sensing (FOAS) and predictive analytics to detect vessel movements, anchor threats, seismic activity and other critical events along the cable route.',

      primaryAction: 'See how it works',
      secondaryAction: 'Project mission',

      statsLabel: 'Key project figures',

      stats: [
        {
          value: '≈1 m',
          label: 'Sensing resolution',
        },
        {
          value: '<1 s',
          label: 'Detection latency',
        },
        {
          value: '0',
          label: 'New subsea hardware',
        },
      ],
    },

    heroVisual: {
      readoutMessages: [
        'SIGNAL · NOMINAL',
        'VESSEL DETECTED · 4.2km',
        'ANCHOR DRAG · FLAGGED',
        'SEISMIC EVENT · LOGGED',
        'SIGNAL · NOMINAL',
      ],

      title:
        'FOSMARIN subsea fibre monitoring',

      description:
        'Illustration of a subsea fibre-optic cable detecting a vessel, a dragging anchor and seismic activity.',
    },

    pillars: {
      eyebrow: 'Key project pillars',

      title:
        'Five priorities shaping a more resilient subsea future.',

      intro:
        "FOSMARIN brings sensing, analytics and operational resilience together in one approach to protecting Europe's critical maritime infrastructure.",

      items: [
        {
          number: '01',
          title: 'Protect Subsea Cables',
          text:
            'Detect vessel activity, anchor threats, geological events and other risks before they become major disruptions.',
          link: '/challenge',
          linkLabel: 'Explore the challenge',
        },
        {
          number: '02',
          title: 'Advanced FOAS Technology',
          text:
            'Turn existing fibre-optic cables into continuous sensing networks without adding new hardware to the seabed.',
          link: '/technology',
          linkLabel: 'Explore the technology',
        },
        {
          number: '03',
          title: 'AI & Predictive Analytics',
          text:
            'Combine acoustic signals with intelligent analysis and external data to identify events, reduce false alarms and support earlier action.',
          link:
            '/technology#predictive-analytics-and-ai',
          linkLabel: 'See predictive analytics',
        },
        {
          number: '04',
          title: 'Resilient Infrastructure',
          text:
            'Give operators and authorities better situational awareness, decision support and tools for preparedness, response and recovery.',
          link: '/about#impact',
          linkLabel: 'See project impact',
        },
        {
          number: '05',
          title: 'Stronger Maritime Future',
          text:
            'Build knowledge, datasets, operational practices and technology that can strengthen European subsea infrastructure beyond the project itself.',
          link: '/about#objectives',
          linkLabel: 'Explore project objectives',
        },
      ],
    },

    latestNews: {
      eyebrow: 'Latest news',

      title:
        'Follow FOSMARIN as the project begins.',

      readUpdate: 'Read update',

      items: {
        'fosmarin-project-launch-2026': {
          category: 'Project launch',
          status: 'Upcoming',
          dateLabel: '01 Oct 2026',

          title:
            'FOSMARIN official project start announcement',

          excerpt:
            'The official FOSMARIN project start announcement is scheduled to take place at Atlantic Convergence 2026 in Lisbon, Portugal.',

          location: 'Lisbon · Portugal',
        },
      },
    },
  },

  about: {
    hero: {
      eyebrow: 'About Fosmarin',
      title:
        'A European project for safer, more resilient subsea infrastructure.',
      intro:
        'FOSMARIN is an EU-funded initiative developing and validating a real-time monitoring and threat-assessment system for subsea infrastructure, combining Fibre Optic Acoustic Sensing (FOAS), predictive analytics and external data sources.',
    },

    overview: {
      eyebrow: 'Project overview',
      title:
        'Existing fibre becomes part of the protection system.',
      intro:
        'FOSMARIN develops, tests and demonstrates a system that uses existing subsea fibre-optic infrastructure as a continuous sensing layer — without adding new hardware to the seabed.',
      paragraphs: [
        'Using Fibre Optic Acoustic Sensing (FOAS), tiny vibrations along a cable can be detected and analysed to identify vessel movements, anchor threats, seismic activity and other critical events.',
        'FOSMARIN combines this sensing data with predictive analytics and external information sources such as AIS, helping operators and security authorities build a clearer picture of what is happening around critical subsea infrastructure.',
        'The project moves beyond laboratory research: FOAS data will be recorded at two test sites before the developed system is demonstrated on third-party infrastructure in a real-life environment.',
      ],
      facts: [
        { label: 'Project number', value: '101309039' },
        { label: 'Call', value: 'HORIZON-CL3-2025-01' },
        { label: 'Topic', value: 'HORIZON-CL3-2025-01-INFRA-01' },
        { label: 'Type of action', value: 'HORIZON Innovation Action' },
        { label: 'Duration', value: '36 months' },
        { label: 'Project period', value: '1 Oct 2026 — 30 Sep 2029' },
      ],
      outputs: [
        {
          number: '01',
          title: 'Develop and validate the system',
          text:
            'Combine Fibre Optic Acoustic Sensing (FOAS), predictive analytics and external data to improve situational awareness around subsea infrastructure.',
        },
        {
          number: '02',
          title: 'Test it in real conditions',
          text:
            'Record FOAS data at two test sites and later demonstrate the FOSMARIN system on third-party infrastructure in a real-life environment.',
        },
        {
          number: '03',
          title: 'Turn results into lasting knowledge',
          text:
            'Support operational use, post-incident investigation and future developments through shared data, practical know-how and project whitepapers.',
        },
      ],
    },

    missionVision: {
      eyebrow: 'Mission & Vision',
      title:
        "Why FOSMARIN exists — and where it's heading.",
      missionTitle: 'Mission',
      missionText:
        "FOSMARIN strengthens the preparedness, response and recovery capacity of Europe's subsea cable operators and authorities by turning the fibre already in the ground into a continuous monitoring and threat-assessment layer — using Fibre Optic Acoustic Sensing (FOAS) and predictive analytics to detect anchor drags, seismic activity and vessel-related threats in real time, and to give operators the forecast and decision-support tools needed to protect critical infrastructure.",
      visionTitle: 'Vision',
      visionText:
        'A Europe where large-scale disruption to subsea data and energy infrastructure is rare, quickly detected, and quickly recovered from — because every cable route carries its own built-in early-warning system, feeding interdependency maps, forecasting tools, and post-incident investigation data back to the operators, national authorities, and EU coordination bodies responsible for critical infrastructure resilience.',
    },

    objectives: {
      eyebrow: 'Project objectives',
      title:
        'From sensing events to supporting real-world action.',
      intro:
        'FOSMARIN is designed not only to detect what is happening around subsea infrastructure, but also to turn that information into useful operational knowledge for operators and security authorities.',
      items: [
        {
          number: '01',
          title: 'Improve maritime surveillance',
          text:
            'Track vessels and detect critical events using Fibre Optic Acoustic Sensing (FOAS), strengthening situational awareness around subsea infrastructure.',
        },
        {
          number: '02',
          title:
            'Connect operators and security authorities',
          text:
            'Support effective communication between critical infrastructure operators and relevant security authorities so information can reach the people responsible for response and resilience.',
        },
        {
          number: '03',
          title:
            'Support investigation and training',
          text:
            'Record FOAS data for post-incident investigation and provide material that can support end-user training and operational preparedness.',
        },
      ],
      outcomeLabel: 'Expected outcome',
      outcomeText:
        'Develop, test and deploy a system that strengthens subsea resilience and security, supports the uninterrupted flow of resources, energy and information, and gives operators and authorities practical tools for protecting European connectivity.',
    },

    impact: {
      eyebrow: 'Impact',
      title: 'What FOSMARIN leaves behind.',
      intro:
        'Beyond real-time alerts, FOSMARIN is designed to create lasting value across operations, policy, research and society — strengthening how Europe understands and protects its subsea infrastructure.',
      deliveredThrough: 'Delivered through',
      areas: [
        {
          level: 'High impact',
          audience: 'Operators · Regulators · Governments',
          title:
            'A blueprint for stronger subsea resilience',
          text:
            'FOSMARIN is designed to leave operators, regulators and authorities with practical know-how that can influence technology choices, operational procedures, policy and future cable design long after the project ends.',
          delivery:
            'Project whitepapers, stakeholder workshops and policy recommendations.',
        },
        {
          level: 'High impact',
          audience: 'Scientific community',
          title:
            'Open data for the next generation of prediction tools',
          text:
            'Ten high-quality FOAS datasets will give researchers real-world material for developing and testing new vessel-tracking, classification and threat-prediction methods.',
          delivery:
            'Ten published FOAS datasets covering generated threat scenarios and long-term installation data paired with reference AIS information.',
        },
        {
          level: 'Medium–high impact',
          audience: 'Society & public trust',
          title:
            'Fewer disruptions to the infrastructure people rely on',
          text:
            'If deployed at scale, the FOSMARIN approach could reduce disruptions to critical subsea infrastructure while helping rebuild confidence in Europe’s ability to protect essential maritime connections.',
          delivery:
            'Open project communication through the website, social media and press releases.',
        },
      ],
    },

    euFunding: {
      eyebrow: 'EU Funding',
      title: 'Funded by the European Union.',
      intro:
        'FOSMARIN is funded by the European Union under Grant Agreement No. 101309039 as part of HORIZON-CL3-2025-01.',
      facts: [
        {
          label: 'Grant agreement',
          value: '101309039 — FOSMARIN',
        },
        {
          label: 'Programme',
          value: 'HORIZON-CL3-2025-01',
        },
        {
          label: 'Grant form',
          value: 'Budget-based',
        },
        {
          label: 'Grant mode',
          value: 'Action grant',
        },
      ],
      logoAlt: 'Funded by the European Union',
      disclaimer:
        'Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or European Research Executive Agency. Neither the European Union nor the European Research Executive Agency can be held responsible for them.',
    },

    consortiumGlance: {
      eyebrow: 'Consortium at a glance',
      title:
        'Expertise across technology, research and maritime operations.',
      intro:
        'FOSMARIN brings together the range of expertise required for resilient subsea infrastructure — from fibre-optic sensing and system integration to operators, researchers, training organisations and maritime authorities.',
      statsLabel: 'Consortium statistics',
      partners: 'Partners',
      countries: 'Countries',
      coordinator: 'Coordinator',
      coordinatorDescription:
        'AIT leads and coordinates the FOSMARIN consortium.',
      coordinatorCountry: 'Austria · AT',
      footer:
        'Explore every consortium partner, its role in FOSMARIN and the expertise it contributes to the project.',
      linkLabel: 'Explore the consortium',
    },
  },

  common: {
    "underConstruction": {
      "label": "Client input required",
      "defaultTitle": "Content under construction",
      "defaultText": "Detailed content for this section is pending client input.",
      "contentSuffix": "content is under construction",
      "projectMaterial": "Content will be added when project material is available and approved for publication.",
      "resources": "Resources will be added as project outputs become available or are approved for publication."
    }
  },

  challenge: {
    "hero": {
      "eyebrow": "The Challenge",
      "title": "Europe’s subsea infrastructure is critical — and increasingly exposed.",
      "intro": "Subsea data, power and pipeline infrastructure faces accidental damage, deliberate interference and geological hazards. Disruptions can interrupt essential services, while repairs can be costly and slow — making continuous monitoring and early warning increasingly important."
    },
    "threats": {
      "eyebrow": "Threats to subsea cables",
      "title": "Critical infrastructure faces threats from both nature and human activity.",
      "intro": "Subsea cables and related infrastructure can be affected by geological events, long-term degradation, accidental maritime activity and deliberate interference. FOSMARIN considers a broad range of scenarios that can damage infrastructure or indicate suspicious activity nearby.",
      "naturalLabel": "Natural",
      "humanLabel": "Human-related",
      "naturalTitle": "Natural and environmental",
      "naturalIntro": "Events and processes that can damage or degrade subsea infrastructure without direct human intervention.",
      "humanTitle": "Maritime and human activity",
      "humanIntro": "Accidental activity and deliberate interference that may put cables and other subsea assets at risk.",
      "riskLabels": {
        "Low": "Low",
        "Medium": "Medium",
        "High": "High"
      },
      "natural": [
        {
          "title": "Seismic activity",
          "risk": "Medium"
        },
        {
          "title": "Submarine landslide",
          "risk": "Medium"
        },
        {
          "title": "Submarine current drag",
          "risk": "High"
        },
        {
          "title": "Shark or other animal bite",
          "risk": "Low"
        },
        {
          "title": "Cable degradation",
          "risk": "High"
        }
      ],
      "human": [
        {
          "title": "Anchor drop",
          "risk": "High"
        },
        {
          "title": "Trawling",
          "risk": "High"
        },
        {
          "title": "Divers at cable / sabotage",
          "risk": "Low"
        },
        {
          "title": "Seafloor works and dredging",
          "risk": "Low"
        },
        {
          "title": "Loitering near infrastructure",
          "risk": "Medium"
        },
        {
          "title": "Submarine explosives / sabotage",
          "risk": "Medium"
        },
        {
          "title": "Unmanned sub / ROV sabotage",
          "risk": "Medium"
        }
      ],
      "sourceLabel": "Threat model",
      "sourceText": "Risk levels shown here follow the threat assessment contained in the FOSMARIN proposal material."
    },
    "globalContext": {
      "eyebrow": "Global context",
      "title": "Europe's digital and energy lifelines run along the seabed — almost unwatched.",
      "intro": "More than 95% of intercontinental data, and a growing share of Europe's offshore power, travels through subsea cables. They cross thousands of kilometres of ocean floor that no one can watch continuously — until now.",
      "stats": [
        {
          "value": "1.4M km",
          "text": "of subsea cable in service worldwide, carrying almost all intercontinental data traffic"
        },
        {
          "value": "150+",
          "text": "reported cable faults every year, from anchors, trawling and natural hazards"
        },
        {
          "value": "Minutes",
          "text": "is how long it can take a dragging anchor to sever a cable once contact is made"
        },
        {
          "value": "1 fibre",
          "text": "already in the ground is all FOSMARIN needs — no new subsea hardware required"
        }
      ]
    },
    "gaps": {
      "eyebrow": "Current gaps",
      "title": "Existing surveillance leaves important parts of the picture unseen.",
      "intro": "Maritime awareness today typically relies on several systems working together. Each contributes useful information, but each also has limitations — especially when the event happens below the surface.",
      "items": [
        {
          "number": "01",
          "system": "Radar",
          "limitation": "Useful for surface awareness, but coverage is constrained by range."
        },
        {
          "number": "02",
          "system": "AIS",
          "limitation": "Reporting is voluntary and therefore cannot provide a complete picture on its own."
        },
        {
          "number": "03",
          "system": "Coastal cameras",
          "limitation": "Visual monitoring is inherently limited by range and line of sight."
        },
        {
          "number": "04",
          "system": "Satellites",
          "limitation": "Satellite-based monitoring can introduce latency between observation and operational response."
        },
        {
          "number": "05",
          "system": "Sonobuoys",
          "limitation": "Can theoretically detect underwater activity, but deployment and maintenance are complex and civilian use is uncommon."
        }
      ],
      "calloutLabel": "Missing layer",
      "calloutText": "Radar, AIS, cameras and satellites cannot reliably detect underwater activity or complex events near subsea infrastructure. FOSMARIN explores FOAS as an additional sensing layer that can complement these existing sources."
    },
    "action": {
      "eyebrow": "Why action is needed",
      "title": "Protection has to begin before a cable is damaged.",
      "intro": "Monitoring systems can do more than confirm that a failure has already occurred. They can support real-time diagnosis, threat prediction and maintenance decisions — helping operators protect continuity of service.",
      "steps": [
        {
          "number": "01",
          "title": "Monitor",
          "text": "Maintain continuous visibility around critical subsea infrastructure."
        },
        {
          "number": "02",
          "title": "Diagnose",
          "text": "Understand operating conditions and infrastructure status in real time."
        },
        {
          "number": "03",
          "title": "Predict",
          "text": "Identify potential threats before they develop into damaging incidents."
        },
        {
          "number": "04",
          "title": "Maintain",
          "text": "Provide information that can support timely maintenance and reduce losses caused by failures."
        }
      ],
      "outcomeLabel": "Continuous service",
      "outcomeText": "Reliable, permanent and seamless monitoring is a key part of reducing the risk that accidental, intentional or geological events interrupt crucial public services."
    },
    "cost": {
      "eyebrow": "The cost of inaction",
      "title": "A single incident can mean weeks of repair and major economic loss.",
      "intro": "Damage to subsea infrastructure is not only a technical problem. Repairs can take weeks or months, while the wider cost of an outage can greatly exceed the physical repair itself.",
      "scenarios": [
        {
          "type": "Power cables",
          "facts": [
            {
              "value": "€10M–€100M",
              "label": "Typical repair cost"
            },
            {
              "value": "≈50 days",
              "label": "Repair time"
            },
            {
              "value": "€250M",
              "label": "Estimated total outage cost"
            }
          ]
        },
        {
          "type": "Telecommunication cables",
          "facts": [
            {
              "value": "≈15 days",
              "label": "Repair time"
            },
            {
              "value": "€500M",
              "label": "Estimated total outage cost"
            }
          ]
        },
        {
          "type": "Pipelines",
          "facts": [
            {
              "value": "≈6 months",
              "label": "Repair time"
            },
            {
              "value": "€10B",
              "label": "Estimated total outage cost"
            }
          ]
        }
      ],
      "sourceLabel": "Source note",
      "sourceText": "Figures are reproduced from the client's FOSMARIN website content draft, which cites the International Cable Protection Committee for submarine cable repair estimates."
    },
    "policy": {
      "eyebrow": "Policy & EU actions",
      "title": "Subsea infrastructure protection is already a European policy priority.",
      "intro": "European policy has increasingly recognised the need to understand threats, strengthen prevention and improve the resilience of submarine cable infrastructure.",
      "items": [
        {
          "year": "2022",
          "type": "EU analysis",
          "title": "Security threats to undersea communications cables and infrastructure",
          "reference": "PE 702.557 · June 2022",
          "text": "An in-depth analysis from the Directorate General for External Policies of the Union identifying natural and human-made, accidental and intentional threats to undersea infrastructure."
        },
        {
          "year": "2024",
          "type": "Commission Recommendation",
          "title": "Secure and Resilient Submarine Cable Infrastructure",
          "reference": "26 February 2024",
          "text": "Calls for stronger protection of submarine cable infrastructure, including the investigation and use of measures for detecting and preventing threats."
        },
        {
          "year": "2025",
          "type": "EU Action Plan",
          "title": "Action Plan on Cable Security",
          "reference": "21 February 2025",
          "text": "Further strengthens the European approach to reducing disruptive incidents and increasing resilience against malicious activity."
        }
      ]
    }
  },

  useCases: {
    "hero": {
      "eyebrow": "Use Cases",
      "title": "From subsea cables to offshore infrastructure.",
      "intro": "FOSMARIN explores how Fibre Optic Acoustic Sensing (FOAS), predictive analytics and external data can strengthen situational awareness around different forms of critical maritime and subsea infrastructure."
    },
    "topics": "topics",
    "clientInputText": "This use case is part of the approved FOSMARIN website structure. Detailed project content will be added when it is provided or confirmed by the client.",
    "items": {
      "telecom-cables-protection": {
        "eyebrow": "Telecom cables protection",
        "number": "01",
        "title": "Protecting the fibre routes that carry critical communications.",
        "intro": "Telecommunication cables can be exposed to anchors, fishing activity, third-party interference and changes in cable condition. FOAS can provide continuous awareness along the monitored fibre route.",
        "tags": [
          "Anchors & drags",
          "Fishing activity",
          "Third-party interference",
          "Cable condition"
        ],
        "points": [
          {
            "title": "Detect activity near the cable",
            "text": "Vessel movements and mechanical disturbances can create vibration patterns that are visible in FOAS data."
          },
          {
            "title": "Monitor the route continuously",
            "text": "Existing fibre can provide a sensing layer along the cable instead of relying only on observations from the surface."
          },
          {
            "title": "Support earlier response",
            "text": "Detection and predictive analytics can help operators assess developing risks before damage occurs."
          }
        ]
      },
      "power-cables-monitoring": {
        "eyebrow": "Power cables monitoring",
        "number": "02",
        "title": "Continuous awareness around critical subsea power connections.",
        "intro": "FOSMARIN source material identifies high- and medium-voltage subsea power cables as infrastructure that can benefit from fibre-optic sensing and continuous monitoring.",
        "tags": [
          "HV & MV cables",
          "Cable movement",
          "External threats",
          "Operational awareness"
        ],
        "points": [
          {
            "title": "Observe cable surroundings",
            "text": "FOAS can detect vibrations associated with activity taking place near a monitored subsea route."
          },
          {
            "title": "Recognise mechanical events",
            "text": "Cable movement, strumming and external interference can create distinct measurable signal patterns."
          },
          {
            "title": "Reduce outage risk",
            "text": "Earlier awareness can support maintenance and operational decisions before a developing event becomes a failure."
          }
        ]
      },
      "offshore-wind-farms": {
        "eyebrow": "Offshore wind farms",
        "number": "03",
        "title": "Extending fibre sensing into offshore energy infrastructure.",
        "intro": "The FOSMARIN technical material includes offshore infrastructure and wind-turbine interconnections among the environments where fibre sensing can provide additional situational awareness.",
        "tags": [
          "Offshore infrastructure",
          "Wind interconnections",
          "Subsea cables",
          "Continuous monitoring"
        ],
        "points": [
          {
            "title": "Monitor cable connections",
            "text": "Fibre associated with offshore infrastructure can provide a continuous sensing path along critical connections."
          },
          {
            "title": "Detect nearby activity",
            "text": "Waterborne activity and mechanical disturbances can be detected through their effect on the fibre."
          },
          {
            "title": "Add operational context",
            "text": "FOAS information can be combined with external sources to improve awareness around offshore assets."
          }
        ]
      },
      "pipelines-monitoring": {
        "eyebrow": "Pipelines monitoring",
        "number": "04",
        "title": "Supporting situational awareness around subsea pipelines.",
        "intro": "FOSMARIN is intended to detect and predict threats not only to data and energy cables but also to other critical subsea infrastructure, including pipelines.",
        "tags": [
          "Pipelines",
          "Third-party activity",
          "Threat detection",
          "Predictive monitoring"
        ],
        "points": [
          {
            "title": "Observe nearby threats",
            "text": "Fibre sensing can contribute information about activity occurring close to critical subsea infrastructure."
          },
          {
            "title": "Combine sensing and context",
            "text": "FOAS data can be fused with sources such as AIS to improve understanding of detected maritime activity."
          },
          {
            "title": "Support resilience",
            "text": "Continuous monitoring can strengthen prevention, incident response and post-incident investigation."
          }
        ]
      },
      "ports-and-harbours": {
        "eyebrow": "Ports & harbours",
        "number": "05",
        "title": "A planned FOSMARIN use-case area requiring further client detail.",
        "intro": "Ports & Harbours is part of the approved website structure, but the supplied project material does not yet define the specific FOSMARIN scenario, deployment model or validation activity for this use case.",
        "status": "client-input"
      },
      "shallow-water-monitoring": {
        "eyebrow": "Shallow water monitoring",
        "number": "06",
        "title": "Monitoring cable environments where the seabed is especially exposed.",
        "intro": "The technical material explicitly identifies shallow-water and low-tide seabed monitoring as a FOAS application, including areas where subsea infrastructure may be exposed to changing environmental and human activity.",
        "tags": [
          "Shallow water",
          "Low tide",
          "Seabed exposure",
          "Cable monitoring"
        ],
        "points": [
          {
            "title": "Observe exposed areas",
            "text": "Shallow routes can be affected by changing water depth and increased interaction with surface and coastal activity."
          },
          {
            "title": "Detect mechanical disturbance",
            "text": "FOAS can identify vibration and movement along the monitored fibre route."
          },
          {
            "title": "Maintain continuous awareness",
            "text": "The same fibre can provide ongoing monitoring without installing a separate chain of subsea sensors."
          }
        ]
      },
      "search-and-rescue-support": {
        "eyebrow": "Search & rescue support",
        "number": "07",
        "title": "A planned FOSMARIN use-case area requiring further client detail.",
        "intro": "Search & Rescue Support is included in the approved website structure, but the supplied project documents do not currently describe the intended FOSMARIN functionality, operational workflow or validation scenario.",
        "status": "client-input"
      }
    }
  },

  technology: {
    "hero": {
      "eyebrow": "Technology",
      "title": "Turning existing fibre into a continuous sensing network.",
      "intro": "FOSMARIN uses Fibre Optic Acoustic Sensing (FOAS), signal processing, external data and predictive analytics to detect, understand and assess activity around critical subsea infrastructure."
    },
    "simpleWords": {
      "badge": "In simple words",
      "title": "Imagine a very, very long guitar string lying on the bottom of the sea.",
      "paragraphs": [
        "If you pluck it anywhere — even hundreds of kilometres away — the sound travels all the way down the string. FOSMARIN listens to that string every single metre, all the time.",
        "The \"string\" is a cable that's already down there, quietly carrying internet data. FOSMARIN shines a tiny flash of laser light into it and listens to the echo.",
        "Anything that shakes the cable — a ship, a dragging anchor, even the ground shifting — changes that echo. A computer instantly works out what made the sound, where, and how worried we should be."
      ],
      "visualTitle": "Fibre sensing illustrated as a vibrating string",
      "visualDescription": "Two endpoints connected by a long fibre with an animated signal travelling between them."
    },
    "howItWorks": {
      "eyebrow": "How it works",
      "title": "From a flash of light to a real-time alert — in four steps.",
      "intro": "This is Fibre Optic Acoustic Sensing (FOAS): the same glass fibre that carries your data becomes a continuous line of listening points, every few metres, along its entire length.",
      "steps": [
        {
          "number": "01",
          "title": "A laser sends tiny pulses down the fibre",
          "text": "Every few metres, a flash of light travels along the cable and reflects tiny amounts of itself back home, like a very fast echo."
        },
        {
          "number": "02",
          "title": "Vibrations change the echo",
          "text": "A ship's engine, a dragging anchor or a seismic shift all shake the fibre a tiny amount — enough to change the pattern of light bouncing back."
        },
        {
          "number": "03",
          "title": "Thousands of virtual microphones appear",
          "text": "Software turns every metre of fibre into its own listening point — so one strand of glass becomes thousands of underwater \"ears\" at once."
        },
        {
          "number": "04",
          "title": "Predictive analytics tells threats apart",
          "text": "An AI model compares each sound's fingerprint to what's normal for that stretch of seabed, and flags real threats in under a second — cutting false alarms."
        }
      ]
    },
    "darkFibre": {
      "eyebrow": "Using dark fibre",
      "title": "Existing cables become part of the sensing system.",
      "intro": "FOSMARIN is designed to use available optical fibre in existing subsea infrastructure. Instead of deploying a new sensor network on the seabed, an interrogator sends light through the fibre and observes how the returning signal changes.",
      "onshore": "Onshore",
      "interrogator": "FOAS interrogator",
      "subsea": "Subsea",
      "existingCable": "Existing fibre cable",
      "benefits": [
        {
          "number": "01",
          "title": "Existing infrastructure",
          "text": "FOSMARIN uses fibre that is already installed inside subsea cable systems."
        },
        {
          "number": "02",
          "title": "No new seabed hardware",
          "text": "The sensing capability is created from the fibre itself rather than by installing a new chain of underwater sensors."
        },
        {
          "number": "03",
          "title": "Long-range coverage",
          "text": "A FOAS interrogator can monitor large areas along the cable from an accessible cable endpoint."
        }
      ],
      "highlightLabel": "new subsea sensing hardware",
      "highlightText": "The project builds on fibre infrastructure that is already deployed."
    },
    "multi": {
      "eyebrow": "Multi-parameter monitoring",
      "title": "One event can be understood through several layers of information.",
      "intro": "FOSMARIN does not rely on a single signal value. FOAS measurements can be transformed into signal features and higher-level information, then combined with external reference sources to build a more useful operational picture.",
      "layers": [
        {
          "label": "Raw signal",
          "title": "Strain rate",
          "text": "The fibre responds to mechanical disturbances and vibration along the cable."
        },
        {
          "label": "Signal features",
          "title": "Spectral energy",
          "text": "The signal can be analysed in the frequency domain to reveal characteristic patterns."
        },
        {
          "label": "Derived information",
          "title": "Higher-level features",
          "text": "Processed FOAS information provides a richer description of detected activity."
        },
        {
          "label": "External context",
          "title": "Reference data",
          "text": "Sources such as AIS can add vessel identity, position and movement context."
        }
      ],
      "flowLabel": "Data fusion",
      "flowText": "Multiple signal features and external context can be combined before classification, tracking and prediction."
    },
    "predictive": {
      "eyebrow": "Predictive analytics & AI",
      "title": "The goal is not only to detect an incident — but to recognise risk before damage occurs.",
      "intro": "FOSMARIN combines signal processing, data analytics and external information to move from observation towards classification, tracking, behaviour analysis and prediction.",
      "stages": [
        {
          "time": "Past",
          "question": "What happened?",
          "title": "Analysis"
        },
        {
          "time": "Now",
          "question": "What is happening?",
          "title": "Monitoring"
        },
        {
          "time": "Next",
          "question": "What could happen?",
          "title": "Prediction"
        }
      ],
      "label": "Predictive layer",
      "copyTitle": "Turn complex signal patterns into decision support.",
      "copyText": "A threat may develop over time. By analysing FOAS signals together with contextual data, FOSMARIN aims to flag risks early enough for an operator or authority to respond.",
      "capabilities": [
        "Classification",
        "Identification",
        "Tracking",
        "Behaviour analysis",
        "Threat prediction"
      ]
    },
    "architecture": {
      "eyebrow": "System architecture & components",
      "title": "From a vibration on the seabed to information an operator can act on.",
      "intro": "FOSMARIN connects fibre sensing, processing, contextual information and predictive analytics into one operational chain.",
      "ariaLabel": "FOSMARIN system processing flow",
      "items": [
        {
          "number": "01",
          "title": "Subsea fibre",
          "text": "Existing fibre-optic infrastructure acts as the sensing medium."
        },
        {
          "number": "02",
          "title": "FOAS interrogator",
          "text": "Laser pulses are transmitted into the fibre and the returning light is measured."
        },
        {
          "number": "03",
          "title": "Signal processing",
          "text": "Raw measurements are transformed into useful acoustic and signal features."
        },
        {
          "number": "04",
          "title": "Data fusion",
          "text": "FOAS information is combined with external sources such as AIS."
        },
        {
          "number": "05",
          "title": "Analytics",
          "text": "Algorithms classify, identify, track and assess detected activity."
        },
        {
          "number": "06",
          "title": "Operational interface",
          "text": "Results are delivered to operators and relevant authorities."
        }
      ]
    },
    "processing": {
      "eyebrow": "Data processing & algorithms",
      "title": "Raw fibre measurements become structured operational information.",
      "intro": "The useful output of FOAS is created through a processing chain: measurements are transformed, correlated and interpreted so that events can be classified and tracked rather than presented as raw signal alone.",
      "stages": [
        {
          "number": "01",
          "title": "Acquire",
          "text": "Continuous FOAS measurements are collected along the monitored fibre."
        },
        {
          "number": "02",
          "title": "Extract",
          "text": "Signal processing derives useful characteristics such as spectral information and higher-level features."
        },
        {
          "number": "03",
          "title": "Fuse",
          "text": "FOAS information is correlated with reference and external data sources."
        },
        {
          "number": "04",
          "title": "Classify",
          "text": "Algorithms distinguish relevant activities and event types."
        },
        {
          "number": "05",
          "title": "Track",
          "text": "Detected activity can be followed over time and along the monitored area."
        },
        {
          "number": "06",
          "title": "Predict",
          "text": "Behaviour analysis supports risk assessment and predictive warning."
        }
      ],
      "highlightLabel": "planned FOAS datasets",
      "highlightText": "FOSMARIN plans to release datasets from generated threat scenarios and long-term monitoring to support future tracking, classification and prediction research."
    },
    "integration": {
      "eyebrow": "Integration, interoperability & security",
      "title": "Detection only matters when the information reaches the people who can respond.",
      "intro": "FOSMARIN is being developed as more than an isolated sensing instrument. The project connects monitoring results with operational processes, information sharing and post-incident investigation.",
      "areas": [
        {
          "label": "Operators",
          "title": "Operational workflows",
          "text": "FOSMARIN is intended to support the organisations responsible for operating critical subsea infrastructure."
        },
        {
          "label": "Authorities",
          "title": "Standard Operating Procedures",
          "text": "The project aims to integrate FOAS-derived information into security-authority SOPs."
        },
        {
          "label": "Europe",
          "title": "CISE integration",
          "text": "Common Information Sharing Environment integration supports information exchange with relevant authorities."
        },
        {
          "label": "After an incident",
          "title": "Stored evidence",
          "text": "FOAS features can be retained to support post-incident investigation and training."
        }
      ],
      "path": [
        "FOAS",
        "FOSMARIN platform",
        "Operators",
        "Authorities"
      ]
    }
  },

  consortium: {
    "hero": {
      "eyebrow": "Consortium",
      "title": "European expertise across sensing, research, infrastructure and maritime security.",
      "intro": "FOSMARIN brings together 13 organisations from eight countries, combining fibre-optic technology, data science, system integration, infrastructure operation, research, training and public-authority expertise."
    },
    "partners": {
      "eyebrow": "Partners",
      "title": "13 organisations bringing together technology, research, infrastructure and public authorities.",
      "intro": "FOSMARIN combines the expertise required to develop, test and validate a practical subsea monitoring system — from fibre-optic sensing and data science to infrastructure operation, integration and training.",
      "coordinator": "Coordinator"
    },
    "partnerMap": {
      "eyebrow": "Partner map",
      "title": "A European consortium spanning eight countries.",
      "intro": "Research organisations, technology providers, operators and authorities across Europe contribute to the development and validation of FOSMARIN.",
      "partner": "partner",
      "partners": "partners"
    },
    "roles": {
      "eyebrow": "Roles & contributions",
      "title": "Different capabilities, connected through one operational system.",
      "intro": "The consortium combines development, integration, research, real-world infrastructure, public-authority expertise and training.",
      "groups": [
        {
          "title": "Coordination & technology",
          "roles": [
            "Coordinator, Technology Development",
            "Technology Provider",
            "Industry Partner"
          ]
        },
        {
          "title": "System integration",
          "roles": [
            "System Integration",
            "System Integrator"
          ]
        },
        {
          "title": "Research & validation",
          "roles": [
            "Research Partner",
            "Operator, Research Partner"
          ]
        },
        {
          "title": "Operations, authority & training",
          "roles": [
            "Operator",
            "Authority",
            "Training"
          ]
        }
      ]
    },
    "advisory": {
      "eyebrow": "Advisory board",
      "title": "External expertise supporting the project.",
      "noticeTitle": "Advisory Board content is under construction",
      "noticeText": "The Advisory Board is part of the approved FOSMARIN website structure. Member information will be added when it is provided or confirmed by the client."
    },
    "stakeholders": {
      "eyebrow": "Authorities & stakeholders",
      "title": "Technology is developed around the organisations that ultimately need to use it.",
      "intro": "FOSMARIN is intended to support infrastructure operators and relevant security authorities, with project results contributing to operational procedures, information sharing and post-incident investigation.",
      "groups": [
        {
          "label": "Authority",
          "roles": [
            "Authority"
          ],
          "text": "Public-authority expertise helps connect project results with security, civil-protection and operational requirements."
        },
        {
          "label": "Operators",
          "roles": [
            "Operator",
            "Operator, Research Partner"
          ],
          "text": "Infrastructure operators contribute operational environments, real-world requirements and practical validation."
        },
        {
          "label": "Training",
          "roles": [
            "Training"
          ],
          "text": "Training expertise supports the transfer of project knowledge into practical procedures and end-user capability."
        }
      ],
      "flow": [
        {
          "strong": "FOAS data",
          "text": "Detection & evidence"
        },
        {
          "strong": "FOSMARIN",
          "text": "Analysis & decision support"
        },
        {
          "strong": "Operators & authorities",
          "text": "SOP · CISE · Investigation"
        }
      ]
    },
    "partnerRoles": {
      "Coordinator, Technology Development": "Coordinator, Technology Development",
      "Technology Provider": "Technology Provider",
      "Industry Partner": "Industry Partner",
      "System Integration": "System Integration",
      "System Integrator": "System Integrator",
      "Research Partner": "Research Partner",
      "Operator, Research Partner": "Operator, Research Partner",
      "Operator": "Operator",
      "Authority": "Authority",
      "Training": "Training"
    },
    "countries": {
      "Austria": "Austria",
      "United Kingdom": "United Kingdom",
      "Cyprus": "Cyprus",
      "Greece": "Greece",
      "Spain": "Spain",
      "Italy": "Italy",
      "Denmark": "Denmark",
      "Faroe Islands": "Faroe Islands"
    }
  },

  news: {
    "hero": {
      "eyebrow": "News & Events",
      "title": "Follow FOSMARIN as the project develops.",
      "intro": "Project updates, events, press releases and media from FOSMARIN — documenting progress from project launch through development, validation and demonstration."
    },
    "events": {
      "eyebrow": "Events",
      "title": "Meet FOSMARIN at project events.",
      "intro": "Follow project launches, conferences and public events as FOSMARIN moves from development to validation and demonstration.",
      "item": {
        "type": "Project event",
        "status": "Upcoming",
        "dateLabel": "01 Oct 2026",
        "title": "Atlantic Convergence 2026",
        "text": "FOSMARIN is scheduled to announce the official start of the project at Atlantic Convergence 2026.",
        "location": "Lisbon · Portugal"
      }
    }
  },

  resourcesPage: {
    "hero": {
      "eyebrow": "Resources",
      "title": "Project knowledge, outputs and public material.",
      "intro": "Access FOSMARIN publications, deliverables, reports, presentations and communication material as they become available throughout the project."
    },
    "sections": {
      "publications": {
        "intro": "Scientific publications and research outputs produced through the FOSMARIN project."
      },
      "deliverables": {
        "intro": "Public project deliverables will be made available here as they are completed and approved for publication."
      },
      "reports": {
        "intro": "Project reports, technical findings and relevant public documentation."
      },
      "videos": {
        "intro": "Video material documenting FOSMARIN activities, demonstrations and project results."
      },
      "brochures": {
        "intro": "Project brochures and communication material for stakeholders and the wider public."
      },
      "newsletter": {
        "intro": "FOSMARIN project updates and selected developments delivered through future newsletters."
      },
      "faqs": {
        "intro": "Answers to common questions about FOSMARIN, FOAS technology and the protection of subsea infrastructure."
      }
    },
    "presentations": {
      "eyebrow": "Presentations",
      "title": "Project presentations and technical material.",
      "intro": "FOSMARIN presentation material is being prepared for publication as the project develops.",
      "status": "Public download to be confirmed",
      "publication": "Publication",
      "publicationText": "Public download links will be added once the relevant project material has been approved for publication.",
      "items": [
        {
          "id": "fosmarin-project-presentation",
          "type": "Project presentation",
          "title": "FOSMARIN project presentation",
          "description": "Presentation material covering the FOSMARIN concept, subsea infrastructure challenges, FOAS technology and consortium structure."
        },
        {
          "id": "fosmarin-technical-figures",
          "type": "Technical material",
          "title": "FOSMARIN technical figures",
          "description": "Technical diagrams and figures illustrating the proposed sensing approach, system architecture and project context."
        }
      ]
    }
  },

  contact: {
    "hero": {
      "eyebrow": "Contact",
      "title": "Get in touch with the FOSMARIN project.",
      "intro": "Contact the FOSMARIN consortium for project information, collaboration opportunities, media enquiries or other questions related to the project."
    },
    "form": {
      "eyebrow": "Contact form",
      "title": "Send us a message.",
      "intro": "Use the form below to contact the FOSMARIN consortium. Required fields are marked with an asterisk.",
      "labels": {
        "name": "Name",
        "email": "Email",
        "organisation": "Organisation",
        "subject": "Subject",
        "message": "Message"
      },
      "errors": {
        "name": "Please enter your name.",
        "email": "Please enter your email address.",
        "emailInvalid": "Please enter a valid email address.",
        "subject": "Please enter a subject.",
        "message": "Please enter your message."
      },
      "note": "Form submission will be connected to the project's selected email or backend service before launch.",
      "button": "Send message",
      "success": "The form is validated correctly. Final message delivery will be enabled before launch."
    },
    "details": {
      "eyebrow": "Get in touch",
      "title": "Contact the project directly.",
      "intro": "For general project enquiries, collaboration opportunities or media-related questions, contact the FOSMARIN consortium by email.",
      "emailLabel": "Email",
      "emailTitle": "General enquiries",
      "emailText": "General project, collaboration and communication enquiries.",
      "websiteLabel": "Website",
      "websiteTitle": "FOSMARIN online",
      "websiteText": "Project information, updates, resources and public outputs."
    },
    "social": {
      "eyebrow": "Social media links",
      "title": "Follow FOSMARIN online.",
      "intro": "Official project social media channels will be added once the client confirms the relevant accounts and URLs.",
      "noticeTitle": "Social media links are under construction",
      "noticeText": "Official LinkedIn, X and YouTube links will be added once the project accounts are confirmed by the client."
    }
  }
};

export default en;
