export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      general: {
        percentage: number
      }
      new: undefined
      meal: {
        idMeal: string
      }
      edit: {
        meal: string
      }
      created: {
        isDiet: boolean
      }
    }
  }
}
