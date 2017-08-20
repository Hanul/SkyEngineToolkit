SkyEngineToolkitSample.Home = CLASS({
	
	preset : () => {
		return VIEW;
	},
	
	init : (inner) => {
		
		let lightningBolt = SkyEngineToolkit.LightningBolt({
			startX : -200,
			startY : 0,
			endX : 200,
			endY : 0,
			displacement : 200,
			border : '2px solid yellow'
		}).appendTo(SkyEngine.Screen);
		
		inner.on('close', () => {
			lightningBolt.remove();
		});
	}
});
