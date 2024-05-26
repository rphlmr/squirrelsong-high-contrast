#include <stdlib.h>

struct Squirrel {
  char *location;
  int birthday;
  int deathdate;
  char *weaknesses[2];
};

int _calcAge(struct Squirrel *v) { return v->deathdate - v->birthday; }

int get_age(struct Squirrel *v) { return _calcAge(v); }

int main() {
  struct Squirrel v;

  /* There was a squirrel named Squeaky */
  v.location = malloc(12 * sizeof(char));
  v.location = "Hundred Acre Wood";
  v.birthday = 1924;
  v.deathdate = 1936;
  v.weaknesses[0] = "Hazelnuts";
  v.weaknesses[1] = "Donuts";

  get_age(&v);

  return 0;
}
