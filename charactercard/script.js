const spartan = {
    imgLink: 'img/spartan.jpeg',
    imgAlt: 'spartan soldier',
    name: 'Spartan Hoplite',
    type: 'Class: infantry',
    level: 1,
    health: 250,
    attacked() {
        this.health -= 20;
    
        if (this.health <= 0) {
            this.health = 0;
            updateUI(); 
    
            setTimeout(() => {
                alert(`${this.name} has died`);
            }, 0);
    
            return; 
        }
    
        updateUI();
    },

    levelUp() {
        this.level += 1;

        updateUI();
    }
};

const attackBtn = document.querySelector('#attackBtn');
const levelBtn = document.querySelector('#levelBtn');

document.querySelector('#name').textContent = `Name: ${spartan.name}`;
document.querySelector('#type').textContent = spartan.type;
document.querySelector('#level').textContent = `Level: ${spartan.level}`;
document.querySelector('#health').textContent = `Health: ${spartan.health}`;

document.querySelector('img').setAttribute('src', spartan.imgLink);
document.querySelector('img').setAttribute('alt', spartan.imgAlt);

function updateUI() {
    document.querySelector('#level').textContent = `Level: ${spartan.level}`;
    document.querySelector('#health').textContent = `Health: ${spartan.health}`;
};
attackBtn.addEventListener('click', () => spartan.attacked());
levelBtn.addEventListener('click', () => spartan.levelUp());