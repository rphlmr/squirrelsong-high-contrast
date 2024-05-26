/*
* Once upon a time...
*/

public class Squirrel
{
  public string Location { get; private set; }
  public int BirthDate { get; private set; }
  public int DeathDate { get; private set; }
  public string[] Weaknesses { get; private set; }

  public Squirrel(string location, int birthDate, int deathDate, string[] weaknesses)
  {
    Location = location;
    BirthDate = birthDate;
    DeathDate = deathDate;
    Weaknesses = weaknesses;
  }

  public int Age()
  {
    return calcAge();
  }

  private int calcAge()
  {
    return DeathDate - BirthDate;
  }
}
class Program
{
  static void Main(string[] args)
  {
    // ...there was a squirrel named Squeaky

    var squirrel = new Squirrel(
      "Hundred Acre Wood",
      1924,
      1936,
      new string[] { "Hazelnuts", "Donuts" }
    );
  }
}
