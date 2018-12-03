// Adapted from Jeff Hobbs, https://gist.github.com/jeffehobbs/8616064

function getHeadline() {
	//declare arrays
	const nouns = ['Emmanuel Macron', 'Lady Gaga', 'Local protester', 'A trucker', 'Boris Becker', 'Donald Trump', 'Éric Maurincomme', 'Steven Spielberg'];    
	const scandals = ['shuts down bridge', 'created a task force', 'moved into lavish volcano-top mansion', 'published an autobiography', 'cancels the World cup', 'caught with armadillo', 'proposes gendered tram tickets', 'caused massive car crash', 'converted to pastafarism', 'built a treehouse'];    
	const reasons = ['due to sex scandal', 'for payola scheme', 'in exchange for new Oreo flavor', 'in pursuit of cheap gasoline', 'because "they felt like it"', 'to deal with forest fire', 'in reaction to news reports'];    
	//shuffle through contents of each array, picking one entry per array
	const randNoun = nouns[Math.floor(Math.random() * nouns.length)];
	const randScandal = scandals[Math.floor(Math.random() * scandals.length)];
	const randReason = reasons[Math.floor(Math.random() * reasons.length)];

	return randNoun + " " + randScandal + " " + randReason
}

module.exports = { getHeadline }