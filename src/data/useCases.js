export const useCases = {
  'telecom-cables-protection': {
    eyebrow: 'Telecom cables protection',
    number: '01',
    title: 'Protecting the fibre routes that carry critical communications.',
    intro:
      'Telecommunication cables can be exposed to anchors, fishing activity, third-party interference and changes in cable condition. FOAS can provide continuous awareness along the monitored fibre route.',
    tags: ['Anchors & drags', 'Fishing activity', 'Third-party interference', 'Cable condition'],
    points: [
      {
        title: 'Detect activity near the cable',
        text: 'Vessel movements and mechanical disturbances can create vibration patterns that are visible in FOAS data.',
      },
      {
        title: 'Monitor the route continuously',
        text: 'Existing fibre can provide a sensing layer along the cable instead of relying only on observations from the surface.',
      },
      {
        title: 'Support earlier response',
        text: 'Detection and predictive analytics can help operators assess developing risks before damage occurs.',
      },
    ],
  },

  'power-cables-monitoring': {
    eyebrow: 'Power cables monitoring',
    number: '02',
    title: 'Continuous awareness around critical subsea power connections.',
    intro:
      'FOSMARIN source material identifies high- and medium-voltage subsea power cables as infrastructure that can benefit from fibre-optic sensing and continuous monitoring.',
    tags: ['HV & MV cables', 'Cable movement', 'External threats', 'Operational awareness'],
    points: [
      {
        title: 'Observe cable surroundings',
        text: 'FOAS can detect vibrations associated with activity taking place near a monitored subsea route.',
      },
      {
        title: 'Recognise mechanical events',
        text: 'Cable movement, strumming and external interference can create distinct measurable signal patterns.',
      },
      {
        title: 'Reduce outage risk',
        text: 'Earlier awareness can support maintenance and operational decisions before a developing event becomes a failure.',
      },
    ],
  },

  'offshore-wind-farms': {
    eyebrow: 'Offshore wind farms',
    number: '03',
    title: 'Extending fibre sensing into offshore energy infrastructure.',
    intro:
      'The FOSMARIN technical material includes offshore infrastructure and wind-turbine interconnections among the environments where fibre sensing can provide additional situational awareness.',
    tags: ['Offshore infrastructure', 'Wind interconnections', 'Subsea cables', 'Continuous monitoring'],
    points: [
      {
        title: 'Monitor cable connections',
        text: 'Fibre associated with offshore infrastructure can provide a continuous sensing path along critical connections.',
      },
      {
        title: 'Detect nearby activity',
        text: 'Waterborne activity and mechanical disturbances can be detected through their effect on the fibre.',
      },
      {
        title: 'Add operational context',
        text: 'FOAS information can be combined with external sources to improve awareness around offshore assets.',
      },
    ],
  },

  'pipelines-monitoring': {
    eyebrow: 'Pipelines monitoring',
    number: '04',
    title: 'Supporting situational awareness around subsea pipelines.',
    intro:
      'FOSMARIN is intended to detect and predict threats not only to data and energy cables but also to other critical subsea infrastructure, including pipelines.',
    tags: ['Pipelines', 'Third-party activity', 'Threat detection', 'Predictive monitoring'],
    points: [
      {
        title: 'Observe nearby threats',
        text: 'Fibre sensing can contribute information about activity occurring close to critical subsea infrastructure.',
      },
      {
        title: 'Combine sensing and context',
        text: 'FOAS data can be fused with sources such as AIS to improve understanding of detected maritime activity.',
      },
      {
        title: 'Support resilience',
        text: 'Continuous monitoring can strengthen prevention, incident response and post-incident investigation.',
      },
    ],
  },

  'ports-and-harbours': {
    eyebrow: 'Ports & harbours',
    number: '05',
    title: 'A planned FOSMARIN use-case area requiring further client detail.',
    intro:
      'Ports & Harbours is part of the approved website structure, but the supplied project material does not yet define the specific FOSMARIN scenario, deployment model or validation activity for this use case.',
    status: 'client-input',
  },

  'shallow-water-monitoring': {
    eyebrow: 'Shallow water monitoring',
    number: '06',
    title: 'Monitoring cable environments where the seabed is especially exposed.',
    intro:
      'The technical material explicitly identifies shallow-water and low-tide seabed monitoring as a FOAS application, including areas where subsea infrastructure may be exposed to changing environmental and human activity.',
    tags: ['Shallow water', 'Low tide', 'Seabed exposure', 'Cable monitoring'],
    points: [
      {
        title: 'Observe exposed areas',
        text: 'Shallow routes can be affected by changing water depth and increased interaction with surface and coastal activity.',
      },
      {
        title: 'Detect mechanical disturbance',
        text: 'FOAS can identify vibration and movement along the monitored fibre route.',
      },
      {
        title: 'Maintain continuous awareness',
        text: 'The same fibre can provide ongoing monitoring without installing a separate chain of subsea sensors.',
      },
    ],
  },

  'search-and-rescue-support': {
    eyebrow: 'Search & rescue support',
    number: '07',
    title: 'A planned FOSMARIN use-case area requiring further client detail.',
    intro:
      'Search & Rescue Support is included in the approved website structure, but the supplied project documents do not currently describe the intended FOSMARIN functionality, operational workflow or validation scenario.',
    status: 'client-input',
  },
};
