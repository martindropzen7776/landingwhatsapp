document.addEventListener('DOMContentLoaded', (e) => {
    /* Menu Active Codes */
    const targets = document.querySelectorAll('[data-target]');

    targets.forEach(element => {
        element.addEventListener('click', () => {
            const target = document.querySelector(element.dataset.target);

            targets.forEach(element2 => {
                const target2 = document.querySelector(element2.dataset.target);
                element2.style.color = 'var(--menu_text_color)';
                target2.style.display = 'none';
            });

            element.style.color = 'var(--menu_active_text_color)';
            target.style.display = 'flex';
        })
    });

        const phone = '541144146961';
        let msg = 'Hola! quiero un usuario en su pagina:\n';
        msg += '*Usuario:* ' + user.value + "\n";
     

        const wppLink = `send?text=${encodeURIComponent(msg)}&phone=${phone}&type=phone_number&app_absent=0`;
        console.log(wppLink);

        if (
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
            navigator.userAgent.match(/Opera Mini/i) ||
            navigator.userAgent.match(/IEMobile/i)
        ) {
            window.location.href = 'whatsapp://' + wppLink;
        } else {
            window.open('https://web.whatsapp.com/' + wppLink);
        }

        return false;
    });
});
