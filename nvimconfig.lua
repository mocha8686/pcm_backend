local function devServer()
	local toggleterm = require("toggleterm")
	toggleterm.exec("poetry run python3 manage.py runserver", 2)
	toggleterm.toggle(2)
	toggleterm.toggle(1)
	toggleterm.toggle(1)
	vim.notify("Dev server started.", vim.log.levels.INFO, { title = "nvimconfig" })
end

vim.keymap.set("n", "<leader>td", devServer, { noremap = true, silent = true, desc = "Start dev server" })
