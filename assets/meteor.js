// Meteor Creation 
const animatedSection = document.querySelector('.animated-area');

function createMeteors() {
    const meteor = document.createElement('span');
    meteor.style.left = Math.random() * innerWidth + 'px';
    animatedSection.append(meteor);

    setTimeout(() => {
        meteor.remove();
    }, 2500);
}

setInterval(createMeteors, 200);