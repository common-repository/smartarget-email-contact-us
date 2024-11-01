function init_email (hash)
{
	if (!hash)
	{
		return;
	}

	insertJs_email(hash);
}

function insertJs_email (hash)
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = `https://smartarget.online/loader.js?ver=${Math.random()}&u=${hash}&source=wordpress_email`;
	document.head.appendChild(script);
}

init_email(smartarget_email_params.hash);
