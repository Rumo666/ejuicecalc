$(document).ready(function() {
	// Tabs
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.calc-form').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

	// Calc sliders
	// Nicotine base sliders
	$("#vgBaseSlider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 100,
		step: 1,
		postfix: "%",
		from: 0,

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
		from: 100,

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
		from: 100,

		onStart: function(data) {
			$("#nicBase").val(data.from);
		}
	});

	// Juice sliders
	$("#vgJuiceSlider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 100,
		step: 1,
		postfix: "%",
		from: 50,

		onStart: function(data) {
			$("#vgJuice").val(data.from);
		}
	});

	$("#pgJuiceSlider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 100,
		step: 1,
		postfix: "%",
		from: 50,

		onStart: function(data) {
			$("#pgJuice").val(data.from);
		}
	});

	$("#diluentJuiceSlider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 100,
		step: 1,
		postfix: "%",
		from: 0,

		onStart: function(data) {
			$("#diluentJuice").val(data.from);
		}
	});

	$("#pgFlavorsSlider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 100,
		step: 1,
		postfix: "%",
		from: 5,

		onStart: function(data) {
			$("#pgFlavors").val(data.from);
		}
	});

	$("#vgFlavorsSlider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 100,
		step: 1,
		postfix: "%",
		from: 0,

		onStart: function(data) {
			$("#vgFlavors").val(data.from);
		}
	});

	$("#nicJuiceSlider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 36,
		step: 1,
		postfix: " мг/мл",
		from: 3,

		onStart: function(data) {
			$("#nicJuice").val(data.from);
		}
	});

	
	var base = {
		$vgSlider: $("#vgBaseSlider").data("ionRangeSlider"),
		$pgSlider: $("#pgBaseSlider").data("ionRangeSlider"),
		$diluentSlider: $("#diluentBaseSlider").data("ionRangeSlider"),
		$nicSlider: $("#nicBaseSlider").data("ionRangeSlider"),
		
		$vgInput: $("#vgBase"),
		$pgInput: $("#pgBase"),
		$diluentInput: $("#diluentBase"),
		$nicInput: $("#nicBase"),

		vgValue: $("#vgBaseSlider").data("from"),
		pgValue: $("#pgBaseSlider").data("from"),
		diluentValue: $("#diluentBaseSlider").data("from"),
		nicStrength: $("#nicBaseSlider").data("from"),
	};

	var juice = {
		$vgSlider: $("#vgJuiceSlider").data("ionRangeSlider"),
		$pgSlider: $("#pgJuiceSlider").data("ionRangeSlider"),
		$diluentSlider: $("#diluentJuiceSlider").data("ionRangeSlider"),
		$pgFlavorsSlider: $("#pgFlavorsSlider").data("ionRangeSlider"),
		$vgFlavorsSlider: $("#vgFlavorsSlider").data("ionRangeSlider"),
		$nicSlider: $("#nicJuiceSlider").data("ionRangeSlider"),
		
		$volumeInput: $("#juiceVolume"),
		$vgInput: $("#vgJuice"),
		$pgInput: $("#pgJuice"),
		$diluentInput: $("#diluentJuice"),
		$pgFlavorsInput: $("#pgFlavors"),
		$vgFlavorsInput: $("#vgFlavors"),
		$nicInput: $("#nicJuice"),

		volume: parseInt($("#juiceVolume").val()),
		vgValue: $("#vgJuiceSlider").data("from"),
		pgValue: $("#pgJuiceSlider").data("from"),
		diluentValue: $("#diluentJuiceSlider").data("from"),
		pgFlavorsValue: $("#pgFlavorsSlider").data("from"),
		vgFlavorsValue: $("#vgFlavorsSlider").data("from"),
		nicStrength: $("#nicJuiceSlider").data("from")
		
	}

	function calcLiquid() {
		var baseVolume = (juice.nicStrength / base.nicStrength) * juice.volume,
			vgBaseVolume = baseVolume * (base.vgValue / 100),
			pgBaseVolume = baseVolume * (base.pgValue / 100),
			diluentBaseVolume = baseVolume * (base.diluentValue / 100),
			
			vgFlavorsVolume = juice.volume * (juice.vgFlavorsValue / 100),
			pgFlavorsVolume = juice.volume * (juice.pgFlavorsValue / 100),
			vgVolume = juice.volume * (juice.vgValue / 100) - vgBaseVolume - vgFlavorsVolume,
			pgVolume = juice.volume * (juice.pgValue / 100) - pgBaseVolume - pgFlavorsVolume,
			diluentVolume = juice.volume * (juice.diluentValue / 100);
		
		//console.log(vgBaseVolume + '\n' + pgBaseVolume + '\n' + diluentBaseVolume);
		console.log(vgFlavorsVolume, pgFlavorsVolume);
		$("#baseVolume").html(baseVolume.toFixed(2));
		$("#vgBaseVolume").html(vgBaseVolume.toFixed(2));
		$("#pgBaseVolume").html(pgBaseVolume.toFixed(2));
		$("#diluentBaseVolume").html(diluentBaseVolume.toFixed(2));

		$("#vgVolume").html(vgVolume.toFixed(2));
		$("#pgVolume").html(pgVolume.toFixed(2));
		$("#diluentVolume").html(diluentVolume.toFixed(2));
		$("#vgFlavorsVolume").html(vgFlavorsVolume.toFixed(2));
		$("#pgFlavorsVolume").html(pgFlavorsVolume.toFixed(2));
	}
	
	calcLiquid();
	
	// Keep input values in range
	function checkInputRange($input) {
		var max = parseInt($input.attr('max'));
		var min = parseInt($input.attr('min'));
		if ($input.val() > max) {
			$input.val(max);
		}
		else if ($input.val() < min) {
			$input.val(min);
		}       
	}
	
	function pgVgSliderChange(component, value, source) {
		var residue = 100 - source.diluentValue;
		switch(component) {
			case "pg":
				source.$pgInput.val(value);
				source.pgValue = value;
				source.vgValue = residue - source.pgValue;

				source.$vgSlider.update({from: source.vgValue});
				source.$vgInput.val(source.vgValue);
				break;

			case "vg":
				source.$vgInput.val(value);
				source.vgValue = value;
				source.pgValue = residue - source.vgValue;

				source.$pgSlider.update({from: source.pgValue});
				source.$pgInput.val(source.pgValue);
				break;
		}		
	}

	function pgVgInputChange(component, value, source) {
		var residue = 100 - source.diluentValue;
		switch(component) {
			case "pg":
				source.pgValue = value;
				source.vgValue = residue - source.pgValue;

				source.$pgSlider.update({
					from: source.pgValue
				});
				source.$vgSlider.update({
					from: source.vgValue
				});

				source.$vgInput.val(source.vgValue);
				break;

			case "vg":
				source.vgValue = value;
				source.pgValue = residue - source.vgValue;

				source.$vgSlider.update({
					from: source.vgValue
				});
				source.$pgSlider.update({
					from: source.pgValue
				});

				source.$pgInput.val(source.pgValue);
				break;
		}
	}

	function flavorsChange(source) {
			source.$vgFlavorsSlider.update({ max: source.vgValue });
			source.$vgFlavorsInput.attr("max", source.vgValue);
			checkInputRange(source.$vgFlavorsInput);
			if(source.vgFlavorsValue > source.vgValue) {
				source.vgFlavorsValue = source.vgValue;
			} 

			source.$pgFlavorsSlider.update({ max: source.pgValue });
			source.$pgFlavorsInput.attr("max", source.pgValue);
			checkInputRange(source.$pgFlavorsInput);
			if(source.pgFlavorsValue > source.pgValue) {
				source.pgFlavorsValue = source.pgValue;
			} 
	}

	function diluentChange(value, source) {
		var delta = value - source.diluentValue,
			residue = 100 - value;

		if(delta != 0) {
			if(delta < 0) {
				source.vgValue -= delta;
			} else if(source.vgValue > 0) {
				 if(delta > source.vgValue) {
					delta -= source.vgValue;
					source.vgValue = 0;
					source.pgValue -= delta;
				} else {
					source.vgValue -= delta;
				}
			} else {
				source.pgValue -= delta;
			}
			// delta = 0
		}

		source.$vgSlider.update({from: source.vgValue, max: residue});
		source.$pgSlider.update({from: source.pgValue, max: residue});
		source.$vgInput.val(source.vgValue);
		source.$vgInput.attr("max", residue);
		source.$pgInput.val(source.pgValue);
		source.$pgInput.attr("max", residue);
	}

	// PG/VG sliders and inputs are synced to get 100% in total
	// Base sliders
	base.$vgSlider.update({
		onChange: function(data) {
			pgVgSliderChange("vg", data.from, base);
			calcLiquid();
		}
	});
	
	base.$pgSlider.update({
		onChange: function(data) {
			pgVgSliderChange("pg", data.from, base);
			calcLiquid();
		}
	});
	
	base.$diluentSlider.update({
		onChange: function(data) {
			base.$diluentInput.val(data.from);
			diluentChange(data.from, base);
			base.diluentValue = data.from;
			calcLiquid();
		}
	});

	base.$nicSlider.update({
		onChange: function(data) {
			base.$nicInput.val(data.from);
			base.nicStrength = data.from;
			calcLiquid();
		}
	});
	
	// Base inputs
	base.$vgInput.change(function() {
		checkInputRange($(this));
		
		pgVgInputChange("vg", $(this).val(), base);
		calcLiquid();
	});
	
	base.$pgInput.change(function() {
		checkInputRange($(this));
		
		pgVgInputChange("pg", $(this).val(), base);
		calcLiquid();
	});

	base.$diluentInput.change(function() {
		checkInputRange($(this));
		
		base.$diluentSlider.update({ from: $(this).val() });
		diluentChange($(this).val(), base);
		base.diluentValue = $(this).val();
		calcLiquid();
	});

	base.$nicInput.change(function() {
		checkInputRange($(this));

		base.$nicSlider.update({ from: $(this).val() });
		base.nicStrength = $(this).val();
		calcLiquid();
	});
	
	// Juice sliders
	juice.$vgSlider.update({
		onChange: function(data) {
			pgVgSliderChange("vg", data.from, juice);
			flavorsChange(juice);
			calcLiquid();
		}
	});
	
	juice.$pgSlider.update({
		onChange: function(data) {
			pgVgSliderChange("pg", data.from, juice);
			flavorsChange(juice);
			calcLiquid();
		}
	});
	
	juice.$diluentSlider.update({
		onChange: function(data) {
			juice.$diluentInput.val(data.from);
			diluentChange(data.from, juice);
			juice.diluentValue = data.from;
			calcLiquid();
		}
	});

	juice.$nicSlider.update({
		onChange: function(data) {
			juice.$nicInput.val(data.from);
			juice.nicStrength = data.from;
			calcLiquid();
		}
	});

	juice.$pgFlavorsSlider.update({
		max: juice.pgValue,
		onChange: function(data) {
			juice.$pgFlavorsInput.val(data.from);
			juice.pgFlavorsValue = data.from;
			calcLiquid();
		}
	});

	juice.$vgFlavorsSlider.update({
		max: juice.vgValue,
		onChange: function(data) {
			juice.$vgFlavorsInput.val(data.from);
			juice.vgFlavorsValue = data.from;
			calcLiquid();
		}
	});

	// Juice inputs
	juice.$vgInput.change(function() {
		checkInputRange($(this));
		pgVgInputChange("vg", $(this).val(), juice);
	});
	
	juice.$pgInput.change(function() {
		checkInputRange($(this));
		pgVgInputChange("pg", $(this).val(), juice);
	});
	
	juice.$pgFlavorsInput.change(function() {
		checkInputRange($(this));
		juice.$pgFlavorsSlider.update({ from: $(this).val() });
	});
	
	juice.$vgFlavorsInput.change(function() {
		checkInputRange($(this));
		juice.$vgFlavorsSlider.update({ from: $(this).val() });
	});
});

