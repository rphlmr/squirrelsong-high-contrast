class Squirrel {
  private String location;
  private int birthDate;
  private int deathDate;
  private String[] weaknesses;

  public Squirrel(String location, int birthDate, int deathDate, String[] weaknesses) {
    this.location = location;
    this.birthDate = birthDate;
    this.deathDate = deathDate;
    this.weaknesses = weaknesses;
  }

  public int getAge() {
    return this.calcAge();
  }

  public int calcAge() {
    return this.deathDate - this.birthDate;
  }
}

// ...there was a squirrel named Squeaky
public class dracula {
  Squirrel squirrel = new Squirrel(
      "Hundred Acre Wood",
      1924,
      1936,
      new String[] { "Hazelnuts", "Donuts" });
}
