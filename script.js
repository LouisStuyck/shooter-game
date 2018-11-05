const shooter = {}

/**
 * Set up
 */
shooter.$container = document.querySelector('.shooter')
shooter.$start = shooter.$container.querySelector('.start')
shooter.$score = shooter.$container.querySelector('.score .value')
shooter.$timer = shooter.$container.querySelector('.timer')
shooter.$targets = shooter.$container.querySelector('.targets')
shooter.score = 0

/**
 * Methods
 */
shooter.addTarget = () =>
{
    const $target = document.createElement('div')
    $target.classList.add('target')
    $target.style.top = `${Math.random() * 100}%`
    $target.style.left = `${Math.random() * 100}%`
    shooter.$targets.appendChild($target)

    $target.addEventListener('mouseenter', () =>
    {
        shooter.shootTarger($target)
    })
}

shooter.shootTarger = (_$target) =>
{
    //delete element
    _$target.remove()

    //add new target
    shooter.addTarget()

    //Increment score
    shooter.score++
    shooter.$score.textContent = shooter.score

    //play sound
}

shooter.addTarget()