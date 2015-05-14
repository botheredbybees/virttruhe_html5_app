ui = {
	//jQuery objects after init
	music_player	: undefined,
	sfx_player		: undefined,
	layer		: undefined,
	user_status	: undefined,
	life		: undefined,
	keys		: undefined,
	rupees		: undefined,
	item_title	: undefined,
	inventory	: undefined,
	items		: undefined,
	scan		: undefined,
	pause		: undefined,
	dialog		: undefined,
	
	
	
	/*
	 *  STATE
	 */
	update_state		: function(){
		var state = system_status.state;
		
		switch(state){
			case "title" :
				
				break;
				
			case "inventory" :
				this.scan.hide();
				this.inventory.show();
				break;
				
			case "scan" :
				this.inventory.hide();
				this.scan.show();
				break;
				
			case "pause" :
				
				break;
				
			case "new_item" :
				
				break;
				
			case "portal" :
				
				break;
				
			default :
				
		}
	},
	
	
	/*
	 * INVENTORY
	 */
	update_items		: function(){
		console.log("update jquery objects");
		var item_list = inventory.item_list;
		var content = this.items;
		var node;
		var node2;
		var node3;
		
		content.empty();
		
		for (i=0; i <  item_list.length; i++){
			var current_item_id = item_list[i];
			
			node = document.createElement("LI");
			
			content.append(node);
			
			node2 = document.createElement("A");
			node2.setAttribute("href", "#");
			
			node3 = document.createElement("IMG");
			node3.setAttribute("id", current_item_id);
			node3.setAttribute("src", items[current_item_id].icon);
			node3.setAttribute("onclick", "inventory.select('"+ current_item_id +"')");
			
			node2.appendChild(node3);
			
			node.appendChild(node2);
			
			content.append(node);
			
			}
	},
	
	
	select				: function(){
		var old 			= $("#items .selected");
		var selected 		= $("#" + inventory.selected);
		
		try{
			old.removeClass("selected");
		}finally{
			selected.addClass("selected");
		}
		
		//show item name at bottom TODO
		for(i in items){
			var item = items[i];
			if (item.id == this.selected){
				ui.item_title.html(item.name);
			}
		}
		
		
		audio.play_sfx("OOT_PauseMenu_Cursor.ogg");
		
		return;
	},
	
	/*
	 * USER STATS
	 */
	
	
	
	
};










