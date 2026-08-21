export const TRAINERS = [
  { id: 'erica', name: 'Erica', title: 'Personal Trainer & Physical Therapist', avatar: 'https://cloudfront.fitnessblender.com/assets/img/homepage/trainer-series-720.webp' },
  { id: 'tasha', name: 'Tasha', title: 'Strength & Conditioning Specialist', avatar: 'https://cloudfront.fitnessblender.com/assets/img/homepage/workouts-720.webp' },
  { id: 'daniel', name: 'Daniel', title: 'Co-Founder & Personal Trainer', avatar: 'https://cloudfront.fitnessblender.com/assets/img/homepage/team-2024-720.webp' },
  { id: 'kelli', name: 'Kelli', title: 'Co-Founder & Personal Trainer', avatar: 'https://cloudfront.fitnessblender.com/assets/img/homepage/team-2024-720.webp' },
  { id: 'nicole', name: 'Nicole', title: 'Pilates & Mobility Specialist', avatar: 'https://cloudfront.fitnessblender.com/assets/img/homepage/pilot-programs-720.webp' },
  { id: 'kayla', name: 'Kayla', title: 'Physical Therapist', avatar: 'https://cloudfront.fitnessblender.com/assets/img/homepage/team-2024-720.webp' },
];

export const WORKOUT_VIDEOS = [
  {
    id: 'fb-30-day-strength-hiit',
    title: '30 Minute Full Body Strength and HIIT Circuit',
    subtitle: 'High energy supersets for total body burn and conditioning',
    duration: 32,
    difficulty: 4,
    difficultyName: 'Hard',
    calories: '240 - 380',
    bodyFocus: 'Total Body',
    equipment: 'Dumbbell',
    trainingType: 'Strength Training',
    trainer: 'Tasha',
    trainerAvatar: 'https://cloudfront.fitnessblender.com/assets/img/homepage/workouts-720.webp',
    isPlus: false,
    rating: 4.9,
    views: '124K',
    date: '2026-08-10',
    image: 'https://cloudfront.fitnessblender.com/assets/img/homepage/workouts-1440.png',
    videoUrl: 'https://www.youtube.com/embed/gC_L9qAHVJ8',
    description: 'Join Tasha in this fast-paced strength and HIIT combination workout. Build lean muscle and boost cardiovascular endurance with challenging supersets designed to target every major muscle group.',
    structure: [
      { name: 'Warm Up', duration: '5 Mins', detail: '10 exercises, 30s each: Arm circles, Torso twists, Squat to reach, Jumping jacks' },
      { name: 'Strength Supersets', duration: '20 Mins', detail: '4 Sets of 2 exercises (45s on, 15s rest): Dumbbell Squat Press, Bent-over Rows, Reverse Lunges, Push-ups' },
      { name: 'Cool Down & Stretch', duration: '7 Mins', detail: 'Deep breathing, Hamstring stretch, Chest opener, Child pose' }
    ]
  },
  {
    id: 'erica-essentials-upper-body',
    title: 'Beginner Upper Body & Core Strength Routine',
    subtitle: 'Controlled movements focused on posture and foundational strength',
    duration: 25,
    difficulty: 2,
    difficultyName: 'Easy/Moderate',
    calories: '140 - 210',
    bodyFocus: 'Upper Body',
    equipment: 'Dumbbell',
    trainingType: 'Low Impact',
    trainer: 'Erica',
    trainerAvatar: 'https://cloudfront.fitnessblender.com/assets/img/homepage/trainer-series-720.webp',
    isPlus: true,
    rating: 4.8,
    views: '88K',
    date: '2026-08-01',
    image: 'https://cloudfront.fitnessblender.com/assets/img/homepage/trainer-series-1440.png',
    videoUrl: 'https://www.youtube.com/embed/2MoGxae-zyo',
    description: 'Erica leads a low-impact, joint-friendly strength session tailored for upper body mobility and core stability. Great for beginners or recovery days.',
    structure: [
      { name: 'Warm Up', duration: '4 Mins', detail: 'Shoulder rolls, Cat-cow stretches, Wrist mobility' },
      { name: 'Upper Body Focus', duration: '16 Mins', detail: 'Bicep curls, Overhead press, Chest flies, Plank holds' },
      { name: 'Mobility Stretch', duration: '5 Mins', detail: 'Upper trap stretch, Thread the needle, Seated spinal twist' }
    ]
  },
  {
    id: 'nicole-core-pilates-flow',
    title: '20 Minute Express Pilates & Core Conditioning',
    subtitle: 'Burn out your deep abdominal muscles with zero equipment needed',
    duration: 20,
    difficulty: 3,
    difficultyName: 'Moderate',
    calories: '110 - 180',
    bodyFocus: 'Core',
    equipment: 'Mat',
    trainingType: 'Pilates',
    trainer: 'Nicole',
    trainerAvatar: 'https://cloudfront.fitnessblender.com/assets/img/homepage/pilot-programs-720.webp',
    isPlus: true,
    rating: 4.95,
    views: '210K',
    date: '2026-07-28',
    image: 'https://cloudfront.fitnessblender.com/assets/img/homepage/pilot-programs-1440.png',
    videoUrl: 'https://www.youtube.com/embed/hJbRpHZr_d0',
    description: 'Focused mat Pilates flow targeting the transverse abdominis, obliques, and lower back. Build core stability and improve your alignment.',
    structure: [
      { name: 'Pilates Warm Up', duration: '3 Mins', detail: 'Imprinting, Pelvic tilts, Hundreds prep' },
      { name: 'Core Burn Series', duration: '14 Mins', detail: 'The Hundred, Single Leg Stretch, Scissors, Criss-cross' },
      { name: 'Spinal Extension & Stretch', duration: '3 Mins', detail: 'Swan dive, Cobra stretch, Shell stretch' }
    ]
  },
  {
    id: 'daniel-hiit-cardio-burnout',
    title: 'Fat Burning HIIT & Cardio Plyometrics',
    subtitle: 'Maximum calorie burn with bodyweight cardiovascular intervals',
    duration: 40,
    difficulty: 5,
    difficultyName: 'Advanced',
    calories: '350 - 520',
    bodyFocus: 'Total Body',
    equipment: 'No Equipment',
    trainingType: 'HIIT',
    trainer: 'Daniel',
    trainerAvatar: 'https://cloudfront.fitnessblender.com/assets/img/homepage/team-2024-720.webp',
    isPlus: false,
    rating: 4.87,
    views: '450K',
    date: '2026-06-14',
    image: 'https://cloudfront.fitnessblender.com/assets/img/homepage/workouts-1440.png',
    videoUrl: 'https://www.youtube.com/embed/ml6cT4AZdqI',
    description: 'Intense 40-minute bodyweight HIIT workout with Daniel. No equipment required, just bring your energy and determination!',
    structure: [
      { name: 'Cardio Prep Warm Up', duration: '6 Mins', detail: 'High knees, Butt kicks, Boxer shuffle, Lateral bounds' },
      { name: 'HIIT Tabata Intervals', duration: '28 Mins', detail: '20s work / 10s rest across 7 groups: Burpees, Star jumps, Mountain climbers, Jump lunges' },
      { name: 'Deep Cool Down', duration: '6 Mins', detail: 'Quad stretch, Hip flexor stretch, Calf stretches' }
    ]
  },
  {
    id: 'kelli-lower-body-glute-isolation',
    title: 'Lower Body Strength & Glute Burnout',
    subtitle: 'Sculpt your legs and glutes with heavy dumbbells and burnout finishers',
    duration: 35,
    difficulty: 4,
    difficultyName: 'Hard',
    calories: '220 - 340',
    bodyFocus: 'Lower Body',
    equipment: 'Dumbbell',
    trainingType: 'Strength Training',
    trainer: 'Kelli',
    trainerAvatar: 'https://cloudfront.fitnessblender.com/assets/img/homepage/team-2024-720.webp',
    isPlus: false,
    rating: 4.92,
    views: '620K',
    date: '2026-05-19',
    image: 'https://cloudfront.fitnessblender.com/assets/img/homepage/trainer-series-1440.png',
    videoUrl: 'https://www.youtube.com/embed/1BZM2Vre5oc',
    description: 'Kelli guides you through heavy leg drops, sumo squats, hip thrusts, and deadlifts for maximum lower body engagement.',
    structure: [
      { name: 'Glute Activation', duration: '5 Mins', detail: 'Glute bridges, Clamshells, Fire hydrants' },
      { name: 'Main Strength Circuit', duration: '24 Mins', detail: 'Goblet Squats, Romanian Deadlifts, Bulgarian Split Squats' },
      { name: 'Burnout & Stretch', duration: '6 Mins', detail: 'Pigeon pose, Figure four stretch, Standing hamstring stretch' }
    ]
  },
  {
    id: 'kayla-mobility-active-recovery',
    title: 'Restorative Full Body Stretch & Joint Mobility',
    subtitle: 'Relieve muscle tension and boost flexibility with gentle stretches',
    duration: 18,
    difficulty: 1,
    difficultyName: 'Easy',
    calories: '45 - 80',
    bodyFocus: 'Total Body',
    equipment: 'Mat',
    trainingType: 'Stretching/Flexibility',
    trainer: 'Kayla',
    trainerAvatar: 'https://cloudfront.fitnessblender.com/assets/img/homepage/team-2024-720.webp',
    isPlus: true,
    rating: 4.98,
    views: '115K',
    date: '2026-07-02',
    image: 'https://cloudfront.fitnessblender.com/assets/img/about/reward-1440.png',
    videoUrl: 'https://www.youtube.com/embed/sTANio_2E0Q',
    description: 'Perfect active recovery routine created by physical therapist Kayla to open tight hips, shoulders, and spine.',
    structure: [
      { name: 'Spinal Mobility', duration: '6 Mins', detail: 'Cat cow, Spinal rotations, Deep diaphragmatic breathing' },
      { name: 'Lower Body Flexibility', duration: '6 Mins', detail: '90/90 hip stretch, Hamstring wall stretch' },
      { name: 'Upper Body Release', duration: '6 Mins', detail: 'Doorway chest stretch, Neck releases, Child pose' }
    ]
  }
];

export const PROGRAMS = [
  {
    id: 'free-2-week-challenge',
    title: 'Fitness Blender’s Free 2 Week Challenge',
    subtitle: 'Strength Training, Cardio, and Mobility Workouts for a Strong Body and Mind',
    weeks: 2,
    minutesAvg: 31,
    difficulty: 'Level 3-4',
    isFree: true,
    category: 'Challenge',
    image: 'https://cloudfront.fitnessblender.com/assets/img/homepage/team-2024-1440.png',
    tags: ['Total Body', 'Dumbbell', 'Cardio', 'HIIT', 'Mobility']
  },
  {
    id: 'essentials-with-erica',
    title: '5 Day Challenge Trainer Series: Essentials with Erica',
    subtitle: 'Beginner-Friendly Total Body Strength Training with Cardio',
    weeks: 1,
    minutesAvg: 35,
    difficulty: 'Level 2-3',
    isFree: false,
    category: 'Trainer Series',
    image: 'https://cloudfront.fitnessblender.com/assets/img/homepage/trainer-series-1440.png',
    tags: ['Upper Body', 'Lower Body', 'Dumbbell', 'Low Impact']
  },
  {
    id: 'level-up-tasha',
    title: '5 Day Challenge Trainer Series: Level Up with Tasha',
    subtitle: 'Time Under Tension Strength with Cardio for Muscle Growth',
    weeks: 1,
    minutesAvg: 42,
    difficulty: 'Level 4',
    isFree: false,
    category: 'Trainer Series',
    image: 'https://cloudfront.fitnessblender.com/assets/img/homepage/workouts-1440.png',
    tags: ['Total Body', 'Strength', 'Dumbbell', 'HIIT']
  },
  {
    id: 'fb-fit-round-4',
    title: 'FB Fit Round 4: Strength, HIIT Cardio, & Mobility',
    subtitle: 'Intense, Lengthy Workouts: Our Most Challenging 4-Week Program Yet',
    weeks: 4,
    minutesAvg: 48,
    difficulty: 'Level 4-5',
    isFree: false,
    category: 'Program',
    image: 'https://cloudfront.fitnessblender.com/assets/img/homepage/pilot-programs-1440.png',
    tags: ['Total Body', 'Advanced', 'HIIT', 'Dumbbell']
  }
];

export const ARTICLES = [
  {
    id: 'understanding-progressive-overload',
    title: 'How to Implement Progressive Overload Without Lifting Heavier Weights',
    category: 'Fitness',
    author: 'Erica',
    readTime: '6 min read',
    date: 'August 14, 2026',
    excerpt: 'Progressive overload isn’t just about putting more weight on the bar. Learn how tempo, volume, and range of motion can unlock your strength potential.',
    image: 'https://cloudfront.fitnessblender.com/assets/img/homepage/trainer-series-720.webp'
  },
  {
    id: 'post-workout-nutrition-myths',
    title: '3 Post-Workout Nutrition Myths Busted by Registered Dietitians',
    category: 'Nutrition',
    author: 'Fitness Blender Team',
    readTime: '4 min read',
    date: 'August 10, 2026',
    excerpt: 'Do you really need to drink a protein shake within 30 seconds of finishing a workout? We break down the real science behind anabolic windows.',
    image: 'https://cloudfront.fitnessblender.com/assets/img/homepage/team-2024-720.webp'
  },
  {
    id: 'breathwork-stress-relief',
    title: 'Using Diaphragmatic Breathing to Lower Cortisol and Improve Sleep',
    category: 'Health',
    author: 'Nicole',
    readTime: '5 min read',
    date: 'August 04, 2026',
    excerpt: 'Simple 5-minute breathing techniques you can practice daily to activate your parasympathetic nervous system and enhance recovery.',
    image: 'https://cloudfront.fitnessblender.com/assets/img/homepage/pilot-programs-720.webp'
  }
];
