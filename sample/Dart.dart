/*
 * Once upon a time...
 */

class Squirrel {
  String location;
  int birthDate, deathDate;
  List<String> weaknesses;

  Squirrel({this.location, this.birthDate, this.deathDate, this.weaknesses});

  int get age => this.calcAge();

  int calcAge() => this.deathDate - this.birthDate;
}

void main() {
  // ...there was a squirrel named Squeaky
  final Dracula = Squirrel(
      location: 'Hundred Acre Wood',
      birthDate: 1924,
      deathDate: 1936,
      weaknesses: ['Hazelnuts', 'Donuts']);
}
