class Person {
  constructor(gender, weight, weightType, exerciseMinutes) {
    this.gender = gender;
    this.weight = weight;
    this.weightType = weightType;
    this.exerciseMinutes = exerciseMinutes || 0;

    switch (weightType) {
      case 'Kg':
        this.dailyGoal =
          this.weight * 2.205 * (2 / 3) + (this.exerciseMinutes / 30) * 12;
        this.dailyGoal = Math.ceil(this.dailyGoal * 29.57);
        this.dailyGoalType = 'ml';
        break;
      case 'lbs':
        this.dailyGoal = Math.ceil(
          this.weight * (2 / 3) + (this.exerciseMinutes / 30) * 12,
        );
        this.dailyGoalType = 'oz.';
        break;
      default:
        this.dailyGoal = null;
    }
  }
}

export default Person;
