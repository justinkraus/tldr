// type writer stuff
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    autoStart: true,
    delay: 25,
    deleteSpeed: 0,
    pauseFor: 10000,
    strings: ['Earth is the planet we live on. It is the third planet from the Sun. It is the only planet known to have life on it. The Earth formed around 4.5 billion years ago. It is one of four rocky planets on the inside of the Solar System. The other three are Mercury, Venus, and Mars.',
		'A tree is a tall plant with a trunk and branches made of wood. Trees can live for many years. The oldest tree ever discovered is approximately 5,000 years old and the oldest tree from the UK is about 1,000. The four main parts of a tree are the roots, the trunk, the branches, and the leaves.'
		]
});



// typewriter.typeString('Hello World!')
//     .pauseFor(2500)
//     .deleteAll()
//     .typeString('Strings can be removed')
//     .pauseFor(2500)
//     .deleteChars(7)
//     .typeString('<strong>altered!</strong>')
//     .pauseFor(2500)
//     .start();

typewriter
    .deleteAll()
    .start();



var app2 = document.getElementById('app2');

var typewriter2 = new Typewriter(app2, {
    loop: true,
    autoStart: true,
    delay: 25,
    deleteSpeed: 0,
    strings: ["Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans, seas, gulfs, and other salt water bodies, but also by lakes, rivers, and other fresh water, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years. Earth's interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convecting mantle that drives plate tectonics.",
		"In botany, a tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves in most species. In some usages, the definition of a tree may be narrower, including only woody plants with secondary growth, plants that are usable as lumber or plants above a specified height. In wider definitions, the taller palms, tree ferns, bananas, and bamboos are also trees. Trees are not a taxonomic group but include a variety of plant species that have independently evolved a trunk and branches as a way to tower above other plants to compete for sunlight. Trees tend to be long-lived, some reaching several thousand years old. Trees have been in existence for 370 million years. It is estimated that there are some three trillion mature trees in the world."
		]
});



// typewriter.typeString('Hello World!')
//     .pauseFor(2500)
//     .deleteAll()
//     .typeString('Strings can be removed')
//     .pauseFor(2500)
//     .deleteChars(7)
//     .typeString('<strong>altered!</strong>')
//     .pauseFor(2500)
//     .start();

typewriter2
    .pauseFor(500)
    .deleteAll()
    .start();