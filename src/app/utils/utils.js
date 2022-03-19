class Utils {
	percentage(p, t) {
		return (p * 100) / t
	}

	getRole(r) {
		const roles = [
			{ roleId: 2, roleName: 'Administrador' },
			{ roleId: 1, roleName: 'Moderador' },
			{ roleId: 0, roleName: 'Usuário Comum' },
		]

		for (let i = 0; i < roles.length; i++)
			if (r === roles[i].roleId) return roles[i].roleName
	}

	getRoleIcon(r) {
		const roles = [
			{ roleId: 2, roleIcon: 'fas fa-star' },
			{ roleId: 1, roleIcon: 'fas fa-crown' },
			{ roleId: 0, roleIcon: 'fas fa-user' },
		]

		for (let i = 0; i < roles.length; i++)
			if (r === roles[i].roleId) return roles[i].roleIcon
	}
}

module.exports = new Utils()
