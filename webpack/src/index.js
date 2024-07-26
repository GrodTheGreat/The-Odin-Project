import myName from './myName';
import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // Using my own function
    element.innerHTML = myName('Cody');

    return element;
}

document.body.appendChild(component());