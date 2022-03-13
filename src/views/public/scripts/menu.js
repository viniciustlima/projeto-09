$(() => {
	var open = true
	var winSize = $(window)[0].innerWidth

	if (winSize <= 768) {
		$('aside').css('width', 0).css('padding', 0)
		open = false
	}

	$('.menu-button').click(() => {
		if (open) {
			$('aside').animate({ width: 0, padding: 0 }, () => {
				open = false
			})

			$('main, header').css('width', '100%')
			$('main, header').animate({ left: 0 }, () => {
				open = false
			})
		} else {
			$('aside').css('display', 'block')
			$('aside').animate({ width: '300px', padding: '10px 0' }, () => {
				open = true
			})

			$('main, header').css('width', 'calc(100% - 300px)')
			$('main, header').animate({ left: '300px' })
		}
	})

	$(window).resize(() => {
		winSize = $(window)[0].innerWidth
		if (winSize <= 768) {
			$('aside').css('width', 0).css('padding', 0)
			$('main, header').css('width', '100%').css('left', 0)
			open = false
		} else {
			$('aside').css('width', '300px').css('padding', '10px 0')
			$('main, header').css('width', 'calc(100% - 300px)').css('left', '300px')
			open = true
		}
	})
})
