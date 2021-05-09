class Person {
  constructor(gender, weight, weightType, exerciseMinutes) {
    this.gender = gender;
    this.weight = weight;
    this.weightType = weightType;
    this.exerciseMinutes = exerciseMinutes || 0;

    switch (weightType) {
      case 'metric':
        this.dailyGoal = this.weight * (2 / 3) + (this.exerciseMinutes / 30) * 12;
        this.dailyGoal = +(this.dailyGoal * 0.0295735).toFixed(1);
        this.dailyGoalType = 'litres';
        break;
      case 'imperial':
        this.dailyGoal = this.weight * (2 / 3) + (this.exerciseMinutes / 30) * 12;
        this.dailyGoal = +this.dailyGoal.toFixed(1);
        this.dailyGoalType = 'oz.';
        break;
      default:
        this.dailyGoal = null;
    }
  }
}

export default Person;
