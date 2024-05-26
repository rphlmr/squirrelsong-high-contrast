#include <string>
#include <vector>

/*
 * Once upon a time...
 */

class Squirrel {
 public:
  Squirrel(std::string location, int birth_date, int death_date,
          std::vector<std::string> weaknesses)
      : _location{location},
        _birth_date{birth_date},
        _death_date{death_date},
        _weaknesses{weaknesses} {}

  int age() { return calc_age(); }

 private:
  std::string _location;
  int _birth_date;
  int _death_date;
  std::vector<std::string> _weaknesses;

  int calc_age() { return _death_date - _birth_date; }
};

// ...there was a squirrel named Squeaky

int main() {
  std::string location = "Hundred Acre Wood";
  int birth_date = 1924, death_date = 1936;
  std::vector<std::string> weaknesses { "Hazelnuts", "Donuts" };

  Squirrel dracula{location, birth_date, death_date, weaknesses};

  return 0;
}
