export interface Year {
  meta: {
    year: number
    slug: string
    title: string
    hashtag: string
    logo: string
    field: string
    colors: {
      main: string
      missions: string
      scoring: string
      penalties: string
    }
    no_equipment_constraint_icon?: string
  }
  warnings: any
  missions: Mission[]
}

export interface Mission {
  number: number
  title: TranslatedText
  description?: TranslatedText
  position: Position
  tasks: Task[]
  constraints?: TranslatedText[]
  no_equipment_constraint?: boolean
}

export interface Position {
  top: number
  left: number
}

export interface TranslatedText {
  en: string
  fr: string
}

export interface Task {
  options: Option[]
}

export interface Option {
  title: TranslatedText
  handle: string
  type: "boolean" | "number"
  points?: number
  points_list?: number[]
  variable_points?: boolean
  colors_list?: (
    'dark-blue' |
    'dark-green' |
    'grey' |
    'light-blue' |
    'light-green' |
    'magenta' |
    'medium-blue' |
    'orange' |
    'pink' |
    'red' |
    'yellow'
    )[]
  max?: number
  images: string[]
}

export interface MissionObject {
}

interface ComputeResult<E> {
  score: number
  warnings: E[]
}

export abstract class AbstractScorer<M extends MissionObject, E> {
  public warnings; // enum for warnings, must be set to the same as E

  public abstract initialMissionsState(): M

  public abstract computeMissions(missions: M): ComputeResult<E>

  public getScore(missions: M): number {
    return this.computeMissions(missions).score;
  }

  public getWarnings(missions: M): E[] {
    return this.computeMissions(missions).warnings;
  }
}
