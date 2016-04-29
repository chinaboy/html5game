var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Board = (function($){
	var NUM_ROWS = 9;
	var NUM_COLS = 32;
	var Board = function(){
		var that = this;
		var rows = createLayout();
		this.getRows = function(){
			return rows;
		}
	}
})