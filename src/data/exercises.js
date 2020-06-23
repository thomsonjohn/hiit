const moves = [
  {
    name: 'Abs bike',
    muscles: {
      primary: 'core',
      secondary: [],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Air squats',
    muscles: {
      primary: 'quads',
      secondary: ['glutes'],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Bear crawl',
    muscles: {
      primary: 'hams',
      secondary: ['shoulders', 'core'],
    },
    group: ['core', 'legs', 'arms'],
    type: 'bodyweight',
  },
  {
    name: 'Bird dog',
    muscles: {
      primary: 'core',
      secondary: [],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Burpee',
    muscles: {
      primary: 'core',
      secondary: ['quads', 'shoulders'],
    },
    group: ['core', 'legs', 'arms'],
    type: 'bodyweight',
  },
  {
    name: 'Burpee broad jump',
    muscles: {
      primary: 'core',
      secondary: ['quads', 'shoulders'],
    },
    group: ['core', 'legs', 'arms'],
    type: 'bodyweight',
  },
  {
    name: 'Calf raise',
    muscles: {
      primary: 'calves',
      secondary: [],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Cat cow',
    muscles: {
      primary: 'lowBack',
      secondary: [],
    },
    group: ['upper'],
    type: 'bodyweight',
  },
  {
    name: 'Clam',
    muscles: {
      primary: 'abductor',
      secondary: [],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Cross body mountain climber',
    muscles: {
      primary: 'core',
      secondary: ['shoulders'],
    },
    group: ['core', 'upper'],
    type: 'bodyweight',
  },
  {
    name: 'Crunches',
    muscles: {
      primary: 'core',
      secondary: [],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Curtsy lunge',
    muscles: {
      primary: 'glutes',
      secondary: ['calves', 'quads'],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Dead bug',
    muscles: {
      primary: 'core',
      secondary: [],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Diamond push up',
    muscles: {
      primary: 'chest',
      secondary: ['triceps'],
    },
    group: ['arms', 'upper'],
    type: 'bodyweight',
  },
  {
    name: 'Duck walk',
    muscles: {
      primary: 'quads',
      secondary: [],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Flutter kicks',
    muscles: {
      primary: 'core',
      secondary: [],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Forward lunge with twist',
    muscles: {
      primary: 'glutes',
      secondary: ['calves', 'quads'],
    },
    group: ['core', 'leg'],
    type: 'bodyweight',
  },
  {
    name: 'Hindu push up',
    muscles: {
      primary: 'chest',
      secondary: ['shoulders', 'triceps'],
    },
    group: ['arms', 'upper'],
    type: 'bodyweight',
  },
  {
    name: 'Hip thrust',
    muscles: {
      primary: 'glutes',
      secondary: [],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'High boat to low boat',
    muscles: {
      primary: 'core',
      secondary: [],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Jump squats',
    muscles: {
      primary: 'quads',
      secondary: ['glutes', 'calves'],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Jumping jacks',
    muscles: {
      primary: 'calves',
      secondary: ['abductor'],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Lateral bounds',
    muscles: {
      primary: 'abductor',
      secondary: ['calves'],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Leg raise',
    muscles: {
      primary: 'core',
      secondary: [],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Lunge jumps',
    muscles: {
      primary: 'glutes',
      secondary: ['quads', 'calves'],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Mountain climber',
    muscles: {
      primary: 'core',
      secondary: ['shoulders'],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Oblique crunch',
    muscles: {
      primary: 'obliques',
      secondary: ['core'],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Opposite toe touch',
    muscles: {
      primary: 'core',
      secondary: ['obliques'],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Pause squat',
    muscles: {
      primary: 'glutes',
      secondary: ['quads'],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Pike push up',
    muscles: {
      primary: 'shoulders',
      secondary: ['chest', 'triceps'],
    },
    group: ['arms', 'upper'],
    type: 'bodyweight',
  },
  {
    name: 'Pistol squat',
    muscles: {
      primary: 'quads',
      secondary: ['glutes', 'calves'],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Plank',
    muscles: {
      primary: 'core',
      secondary: ['shoulders'],
    },
    group: ['core', 'arms'],
    type: 'bodyweight',
  },
  {
    name: 'Plank hip dips',
    muscles: {
      primary: 'core',
      secondary: ['obliques'],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Plank on elbows',
    muscles: {
      primary: 'core',
      secondary: [],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Plank jack',
    muscles: {
      primary: 'core',
      secondary: ['obliques', 'shoulders'],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Pulse lunge',
    muscles: {
      primary: 'quads',
      secondary: ['glutes', 'calves'],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Push up',
    muscles: {
      primary: 'chest',
      secondary: ['triceps'],
    },
    group: ['arms', 'upper'],
    type: 'bodyweight',
  },
  {
    name: 'Reverse crunch',
    muscles: {
      primary: 'core',
      secondary: [],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Reverse lunge',
    muscles: {
      primary: 'quads',
      secondary: ['calves', 'glutes'],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Reverse plank',
    muscles: {
      primary: 'core',
      secondary: ['shoulders'],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Reverse plank on elbows',
    muscles: {
      primary: 'core',
      secondary: [],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Rotation push up',
    muscles: {
      primary: 'chest',
      secondary: ['shoulders'],
    },
    group: ['core', 'upper', 'arms'],
    type: 'bodyweight',
  },
  {
    name: 'Russian twist',
    muscles: {
      primary: 'core',
      secondary: ['obliques'],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Scissor kick',
    muscles: {
      primary: 'core',
      secondary: ['abductor'],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Side plank',
    muscles: {
      primary: 'obliques',
      secondary: [],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Side leg raise',
    muscles: {
      primary: 'abductors',
      secondary: [],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Side lunge',
    muscles: {
      primary: 'quads',
      secondary: ['glutes'],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Side plank leg lift',
    muscles: {
      primary: 'obliques',
      secondary: ['core', 'shoulders', 'abductor'],
    },
    group: ['core', 'legs'],
    type: 'bodyweight',
  },
  {
    name: 'Side plank pulse',
    muscles: {
      primary: 'obliques',
      secondary: [],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Single arm push up',
    muscles: {
      primary: 'chest',
      secondary: ['shoulders', 'core'],
    },
    group: ['arms', 'upper', 'core'],
    type: 'bodyweight',
  },
  {
    name: 'Single leg glute bridge',
    muscles: {
      primary: 'glutes',
      secondary: ['core'],
    },
    group: ['core', 'legs'],
    type: 'bodyweight',
  },
  {
    name: 'Single leg hip thrust',
    muscles: {
      primary: 'glute',
      secondary: ['core', 'hams'],
    },
    group: ['core', 'legs'],
    type: 'bodyweight',
  },
  {
    name: 'Sit up',
    muscles: {
      primary: 'core',
      secondary: [],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Spiderman plank',
    muscles: {
      primary: 'core',
      secondary: ['obliques'],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Straight leg kickback',
    muscles: {
      primary: 'glute',
      secondary: [],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Superman',
    muscles: {
      primary: 'lowBack',
      secondary: [],
    },
    group: ['upper'],
    type: 'bodyweight',
  },
  {
    name: 'Superman hold',
    muscles: {
      primary: 'lowBack',
      secondary: [],
    },
    group: ['upper'],
    type: 'bodyweight',
  },
  {
    name: 'Superman with scaption',
    muscles: {
      primary: 'lowBack',
      secondary: ['shoulders'],
    },
    group: ['upper'],
    type: 'bodyweight',
  },
  {
    name: 'Walking lunge',
    muscles: {
      primary: 'glutes',
      secondary: ['quads', 'calves'],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Walkout to push up',
    muscles: {
      primary: 'core',
      secondary: ['shoulders', 'chest'],
    },
    group: ['upper', 'arms'],
    type: 'bodyweight',
  },
  {
    name: 'Wall sit',
    muscles: {
      primary: 'quads',
      secondary: [],
    },
    group: ['legs'],
    type: 'bodyweight',
  },
  {
    name: 'Windshield wipers',
    muscles: {
      primary: 'core',
      secondary: ['obliques'],
    },
    group: ['core'],
    type: 'bodyweight',
  },
  {
    name: 'Yoga push ups',
    muscles: {
      primary: 'chest',
      secondary: ['core', 'obliques'],
    },
    group: ['core', 'upper', 'arms'],
    type: 'bodyweight',
  },
  {
    name: 'Bent over row',
    muscles: {
      primary: 'back',
      secondary: ['lowBack'],
    },
    group: ['upper'],
    type: 'bands',
  },
  {
    name: 'Bicep curl',
    muscles: {
      primary: 'biceps',
      secondary: [],
    },
    group: ['arms'],
    type: 'bands',
  },
  {
    name: 'Front raise',
    muscles: {
      primary: 'shoulders',
      secondary: [],
    },
    group: ['upper'],
    type: 'bands',
  },
  {
    name: 'Lateral pulldown',
    muscles: {
      primary: 'back',
      secondary: ['biceps'],
    },
    group: ['upper', 'arms'],
    type: 'bands',
  },
  {
    name: 'Lateral raise',
    muscles: {
      primary: 'shoulders',
      secondary: [],
    },
    group: ['upper'],
    type: 'bands',
  },
  {
    name: 'Pec fly',
    muscles: {
      primary: 'chest',
      secondary: [],
    },
    group: ['upper'],
    type: 'bands',
  },
  {
    name: 'Rear fly',
    muscles: {
      primary: 'back',
      secondary: ['shoulders'],
    },
    group: ['upper'],
    type: 'bands',
  },
  {
    name: 'Reverse curl',
    muscles: {
      primary: 'biceps',
      secondary: [],
    },
    group: ['arms'],
    type: 'bands',
  },
  {
    name: 'Seated row',
    muscles: {
      primary: 'back',
      secondary: ['biceps'],
    },
    group: ['upper', 'arms'],
    type: 'bands',
  },
  {
    name: 'Shoulder press',
    muscles: {
      primary: 'shoulders',
      secondary: [],
    },
    group: ['upper'],
    type: 'bands',
  },
  {
    name: 'Straight arm pulldown',
    muscles: {
      primary: 'back',
      secondary: [],
    },
    group: ['upper'],
    type: 'bands',
  },
  {
    name: 'Tricep extension',
    muscles: {
      primary: 'triceps',
      secondary: [],
    },
    group: ['arms'],
    type: 'bands',
  },
  {
    name: 'Upright row',
    muscles: {
      primary: 'shoulders',
      secondary: [],
    },
    group: ['upper'],
    type: 'bands',
  },
  {
    name: 'Pull up',
    muscles: {
      primary: 'back',
      secondary: ['biceps'],
    },
    group: ['upper', 'arms'],
    type: 'bar',
  },
  {
    name: 'Chin up',
    muscles: {
      primary: 'biceps',
      secondary: ['back'],
    },
    group: ['upper', 'arms'],
    type: 'bar',
  },
  {
    name: 'Mixed grip pull up',
    muscles: {
      primary: 'back',
      secondary: ['biceps'],
    },
    group: ['upper', 'arms'],
    type: 'bar',
  },
]

export default moves
