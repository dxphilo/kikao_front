import ThinkingFace from '@/components/icons/Reaction/ThinkingFace.vue'
import SpeechBubble from '@/components/icons/Reaction/SpeechBubble.vue'
import ThumpsUp from '@/components/icons/Reaction/ThumpsUp.vue'
import type { reaction } from '~/types'

export const reactions: reaction[] = [
  {
    id: 0,
    name: 'ThumpsUp',
    iconComponent: ThumpsUp,
    description: 'This emoji can indicate approval or agreement with a review. It is a simple and universally understood reaction.',
  },
  {
    id: 1,
    name: 'SpeechBubble',
    iconComponent: SpeechBubble,
    description: 'This emoji can indicate that the review has sparked conversation or discussion. It is a good option for reviews that have a lot of engagement.',
  },
  {
    id: 2,
    name: 'Thinking Face',
    iconComponent: ThinkingFace,
    description: 'This emoji can indicate that the review has given the business owner something to consider. It is a good option for reviews that are critical or provide feedback.',

  },

]
