$(document).ready(function() {
	$("#vgBaseSlider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 100,
		step: 1,
		postfix: "%",
		from: 50,

		onStart: function(data) {
			$("#vgBase").val(data.from);
		}
	});

	$("#pgBaseSlider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 100,
		step: 1,
		postfix: "%",
		from: 50,

		onStart: function(data) {
			$("#pgBase").val(data.from);
		}
	});

	$("#diluentBaseSlider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 100,
		step: 1,
		postfix: "%",
		from: 0,

		onStart: function(data) {
			$("#diluentBase").val(data.from);
		}
	});

	$("#nicBaseSlider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 100,
		step: 1,
		postfix: " мг/мл",
		from: 50,

		onStart: function(data) {
			$("#nicBase").val(data.from);
		}
	});
	
	var $vgBaseSlider = $("#vgBaseSlider").data("ionRangeSlider");
	var $pgBaseSlider = $("#pgBaseSlider").data("ionRangeSlider");
	var $diluentBaseSlider = $("#diluentBaseSlider").data("ionRangeSlider");
	var $nicBaseSlider = $("#nicBaseSlider").data("ionRangeSlider");
	
	var vgBaseValue = $("#vgBaseSlider").data("from");
	var pgBaseValue = $("#pgBaseSlider").data("from");
	var diluentBaseValue = $("#diluentBaseSlider").data("from");
	
	// Sync PG/VG sliders and their inputs
	function recalcPgVg(component, value) {
		var from, to;
		switch(component) {
			case "vg": {
				//from = 
			}
		}
	}

	$vgBaseSlider.update({
		onChange: function(data) {
			$("#vgBase").val(data.from);
			vgBaseValue = data.from;

			pgBaseValue = (100 - diluentBaseValue) - vgBaseValue;

			$pgBaseSlider.update({from: pgBaseValue});
			$("#pgBase").val(pgBaseValue);
			//console.log("vg onChange");
			//
		}
	});
	
	$pgBaseSlider.update({
		onChange: function(data) {
			$("#pgBase").val(data.from);
			pgBaseValue = data.from;
			
			vgBaseValue = (100 - diluentBaseValue) - pgBaseValue;

			$vgBaseSlider.update({from: vgBaseValue});
			$("#vgBase").val(vgBaseValue);
		}
	});
	
	$diluentBaseSlider.update({
		onChange: function(data) {
			$("#diluentBase").val(data.from);
			
			var delta = data.from - diluentBaseValue;
			var residue = 100 - data.from;

			if(delta != 0) {
				if(delta < 0) {
					vgBaseValue -= delta;
				} else if(vgBaseValue > 0) {
					 if(delta > vgBaseValue) {
						delta -= vgBaseValue;
						vgBaseValue = 0;
						pgBaseValue -= delta;
					} else {
						vgBaseValue -= delta;
					}
				} else {
					pgBaseValue -= delta;
				}
				delta = 0;
			}

			$vgBaseSlider.update({from: vgBaseValue, max: residue});
			$pgBaseSlider.update({from: pgBaseValue, max: residue});
			$("#vgBase").val(vgBaseValue);
			$("#pgBase").val(pgBaseValue);
			diluentBaseValue = data.from;
			
			if((vgBaseValue + pgBaseValue + diluentBaseValue) != 100) {
				console.log("Total percentage >100!");
			}
		}
	});

	$nicBaseSlider.update({
		onChange: function(data) {
			$("#nicBase").val(data.from);
		
		}
	});

	// Watch if any of the inputs were changed
	$("#vgBase").on('keyup change', function() {
		$vgBaseSlider.update({
			from: $(this).val()
		});
		$pgBaseSlider.update({
			from: 100 - $(this).val()
		});
		$("#pgBase").val(100 - $(this).val());
	});
	
	$("#pgBase").on('keyup change', function() {
		$pgBaseSlider.update({
			from: $(this).val()
		});
		$vgBaseSlider.update({
			from: 100 - $(this).val()
		});
		$("#vgBase").val(100 - $(this).val());
	});
});

