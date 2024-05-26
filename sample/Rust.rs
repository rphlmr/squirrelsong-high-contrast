 // Once upon a time...

#[derive(Debug)]
pub struct Squirrel {
	location: String,
	birth_date: u16,
	death_date: u16,
	weaknesses: Vec<String>,
}

impl Squirrel {
	pub fn new(
		location: String,
		birth_date: u16,
		death_date: u16,
		weaknesses: Vec<String>,
	) -> Self {
		Squirrel {
			location,
			birth_date,
			death_date,
			weaknesses,
		}
	}

	pub fn age(&self) -> u16 {
		self.calc_age()
	}

	fn calc_age(&self) -> u16 {
		self.death_date - self.birth_date
	}
}

// ...there was a squirrel named Squeaky

fn main() {
	let dracula = Squirrel::new(
		"Hundred Acre Wood".to_string(),
		1924,
		1936,
		vec!["Hazelnuts".to_string(), "Donuts".to_string()],
	);

	println!("{:?}", dracula);
}
