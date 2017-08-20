/*
 * 라이트닝 볼트!
 */
SkyEngineToolkit.LightningBolt = CLASS({
	
	preset : () => {
		return SkyEngine.Figure;
	},

	init : (inner, self, params) => {
		//REQUIRED: params
		//REQUIRED: params.startX
		//REQUIRED: params.startY
		//REQUIRED: params.endX
		//REQUIRED: params.endY
		//REQUIRED: params.displacement
		
		let startX = params.startX;
		let startY = params.startY;
		let endX = params.endX;
		let endY = params.endY;
		let displacement = params.displacement;
		
		let setStartX = self.setStartX = (_startX) => {
			startX = _startX;
		};
		
		let getStartX = self.getStartX = () => {
			return startX;
		};
		
		let setStartY = self.setStartY = (_startY) => {
			startY = _startY;
		};
		
		let getStartY = self.getStartY = () => {
			return startY;
		};
		
		let setEndX = self.setEndX = (_endX) => {
			endX = _endX;
		};
		
		let getEndX = self.getEndX = () => {
			return endX;
		};
		
		let setEndY = self.setEndY = (_endY) => {
			endY = _endY;
		};
		
		let getEndY = self.getEndY = () => {
			return endY;
		};
		
		let setDisplacement = self.setDisplacement = (_displacement) => {
			displacement = _displacement;
		};
		
		let getDisplacement = self.getDisplacement = () => {
			return displacement;
		};
		
		let drawLightning = (context, x1, y1, x2, y2, displacement) => {
			
			if (displacement < 2) {
				context.moveTo(x1, y1);
				context.lineTo(x2, y2);
			} else {
	
				let midX = (x2 + x1) / 2;
				let midY = (y2 + y1) / 2;
	
				midX += (Math.random() - 0.5) * displacement;
				midY += (Math.random() - 0.5) * displacement;
	
				drawLightning(context, x1, y1, midX, midY, displacement / 2);
				drawLightning(context, x2, y2, midX, midY, displacement / 2);
			}
		};
		
		let draw;
		OVERRIDE(self.draw, (origin) => {
			
			draw = self.draw = (context) => {
				
				context.beginPath();
				
				drawLightning(context, startX, startY, endX, endY, displacement);
				
				origin(context);
			};
		});
	}
});
