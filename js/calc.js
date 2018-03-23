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
		from_shadow: true,

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
		from_shadow: true,

		onStart: function(data) {
			$("#pgBase").val(data.from);
		}
	});

	$("#thinnerBaseSlider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 100,
		step: 1,
		postfix: "%",
		from: 0,

		onStart: function(data) {
			$("#thinnerBase").val(data.from);
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
		from_shadow: true,

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
		from_shadow: true,

		onStart: function(data) {
			$("#pgJuice").val(data.from);
		}
	});

	$("#thinnerJuiceSlider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 100,
		step: 1,
		postfix: "%",
		from: 0,

		onStart: function(data) {
			$("#thinnerJuice").val(data.from);
		}
	});

	$("#pgFlavorsSlider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 100,
		step: 1,
		postfix: "%",
		from: 5,
		from_shadow: true,

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
		from_shadow: true,

		onStart: function(data) {
			$("#vgFlavors").val(data.from);
		}
	});

	$("#nicJuiceSlider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 50,
		step: 0.1,
		postfix: " мг/мл",
		from: 3,

		onStart: function(data) {
			$("#nicJuice").val(data.from);
		}
	});

	
	var base = {
		$vgSlider: $("#vgBaseSlider").data("ionRangeSlider"),
		$pgSlider: $("#pgBaseSlider").data("ionRangeSlider"),
		$thinnerSlider: $("#thinnerBaseSlider").data("ionRangeSlider"),
		$nicSlider: $("#nicBaseSlider").data("ionRangeSlider"),
		
		$vgInput: $("#vgBase"),
		$pgInput: $("#pgBase"),
		$thinnerInput: $("#thinnerBase"),
		$nicInput: $("#nicBase"),

		vgValue: $("#vgBaseSlider").data("from"),
		pgValue: $("#pgBaseSlider").data("from"),
		thinnerValue: $("#thinnerBaseSlider").data("from"),
		nicStrength: $("#nicBaseSlider").data("from"),
	};

	var juice = {
		$vgSlider: $("#vgJuiceSlider").data("ionRangeSlider"),
		$pgSlider: $("#pgJuiceSlider").data("ionRangeSlider"),
		$thinnerSlider: $("#thinnerJuiceSlider").data("ionRangeSlider"),
		$pgFlavorsSlider: $("#pgFlavorsSlider").data("ionRangeSlider"),
		$vgFlavorsSlider: $("#vgFlavorsSlider").data("ionRangeSlider"),
		$nicSlider: $("#nicJuiceSlider").data("ionRangeSlider"),
		
		$volumeInput: $("#juiceVolume"),
		$vgInput: $("#vgJuice"),
		$pgInput: $("#pgJuice"),
		$thinnerInput: $("#thinnerJuice"),
		$pgFlavorsInput: $("#pgFlavors"),
		$vgFlavorsInput: $("#vgFlavors"),
		$nicInput: $("#nicJuice"),

		volume: parseInt($("#juiceVolume").val()),
		vgValue: $("#vgJuiceSlider").data("from"),
		pgValue: $("#pgJuiceSlider").data("from"),
		thinnerValue: $("#thinnerJuiceSlider").data("from"),
		pgFlavorsValue: $("#pgFlavorsSlider").data("from"),
		vgFlavorsValue: $("#vgFlavorsSlider").data("from"),
		nicStrength: $("#nicJuiceSlider").data("from"),
	}
	
	// Mixer objects
	var mix1 = {
		$vgMix1Slider: $("#vgJuiceMix1Slider").data("ionRangeMix1Slider"),
		$pgMix1Slider: $("#pgJuiceMix1Slider").data("ionRangeMix1Slider"),
		$thinnerMix1Slider: $("#thinnerJuiceMix1Slider").data("ionRangeMix1Slider"),
		$pgFlavorsMix1Slider: $("#pgFlavorsMix1Slider").data("ionRangeMix1Slider"),
		$vgFlavorsMix1Slider: $("#vgFlavorsMix1Slider").data("ionRangeMix1Slider"),
		$nicMix1Slider: $("#nicJuiceMix1Slider").data("ionRangeMix1Slider"),
		
		$volumeInput: $("#mix1Volume"),
		$vgInput: $("#vgMix1"),
		$pgInput: $("#pgMix1"),
		$thinnerInput: $("#thinnerMix1"),
		$pgFlavorsInput: $("#pgFlavorsMix1"),
		$vgFlavorsInput: $("#vgFlavorsMix1"),
		$nicInput: $("#nicMix1"),

		volume: parseInt($("#mix1Volume").val()),
		vgValue: $("#vgMix1Slider").data("from"),
		pgValue: $("#pgMix1Slider").data("from"),
		thinnerValue: $("#thinnerMix1Slider").data("from"),
		pgFlavorsValue: $("#pgFlavorsMix1Slider").data("from"),
		vgFlavorsValue: $("#vgFlavorsMix1Slider").data("from"),
		nicStrength: $("#nicMix1Slider").data("from"),
	}

	var mix2 = {
		$vgMix2Slider: $("#vgJuiceMix2Slider").data("ionRangeMix2Slider"),
		$pgMix2Slider: $("#pgJuiceMix2Slider").data("ionRangeMix2Slider"),
		$thinnerMix2Slider: $("#thinnerJuiceMix2Slider").data("ionRangeMix2Slider"),
		$pgFlavorsMix2Slider: $("#pgFlavorsMix2Slider").data("ionRangeMix2Slider"),
		$vgFlavorsMix2Slider: $("#vgFlavorsMix2Slider").data("ionRangeMix2Slider"),
		$nicMix2Slider: $("#nicJuiceMix2Slider").data("ionRangeMix2Slider"),
		
		$volumeInput: $("#mix2Volume"),
		$vgInput: $("#vgMix2"),
		$pgInput: $("#pgMix2"),
		$thinnerInput: $("#thinnerMix2"),
		$pgFlavorsInput: $("#pgFlavorsMix2"),
		$vgFlavorsInput: $("#vgFlavorsMix2"),
		$nicInput: $("#nicMix2"),

		volume: parseInt($("#mix2Volume").val()),
		vgValue: $("#vgMix2Slider").data("from"),
		pgValue: $("#pgMix2Slider").data("from"),
		thinnerValue: $("#thinnerMix2Slider").data("from"),
		pgFlavorsValue: $("#pgFlavorsMix2Slider").data("from"),
		vgFlavorsValue: $("#vgFlavorsMix2Slider").data("from"),
		nicStrength: $("#nicMix2Slider").data("from"),
	}
	
	// Storing it inside the object for convenience of calculations
	// Reduced from 0..1 to 1..100, initialised in baseChange() call
	juice.baseValues = {};

	function calcLiquid() {
		var baseVolume =  juice.volume * (juice.baseValues.base / 100),
			vgBaseVolume = baseVolume * (base.vgValue / 100),
			pgBaseVolume = baseVolume * (base.pgValue / 100),
			thinnerBaseVolume = baseVolume * (base.thinnerValue / 100),
			
			vgFlavorsVolume = juice.volume * (juice.vgFlavorsValue / 100),
			pgFlavorsVolume = juice.volume * (juice.pgFlavorsValue / 100),
			vgVolume = juice.volume * (juice.vgValue / 100) - vgBaseVolume - vgFlavorsVolume,
			pgVolume = juice.volume * (juice.pgValue / 100) - pgBaseVolume - pgFlavorsVolume,
			thinnerVolume = juice.volume * (juice.thinnerValue / 100) - juice.baseValues.thinner;
		
		//console.log(vgBaseVolume + '\n' + pgBaseVolume + '\n' + thinnerBaseVolume);
		//console.log(vgFlavorsVolume, pgFlavorsVolume);
		$("#baseVolume").html(baseVolume.toFixed(2));
		$("#vgBaseVolume").html(vgBaseVolume.toFixed(2));
		$("#pgBaseVolume").html(pgBaseVolume.toFixed(2));
		$("#thinnerBaseVolume").html(thinnerBaseVolume.toFixed(2));

		$("#vgVolume").html(vgVolume.toFixed(2));
		$("#pgVolume").html(pgVolume.toFixed(2));
		$("#thinnerVolume").html(thinnerVolume.toFixed(2));
		$("#vgFlavorsVolume").html(vgFlavorsVolume.toFixed(2));
		$("#pgFlavorsVolume").html(pgFlavorsVolume.toFixed(2));
	}
	
	// Keep input values in range
	function checkInputRange($input) {
		var max = parseFloat($input.attr('max'));
		var min = parseFloat($input.attr('min'));
		if ($input.val() > max) {
			$input.val(max);
		}
		else if ($input.val() < min) {
			$input.val(min);
		}       
	}
	
	function pgVgSliderChange(component, value, source) {
		var residue = 100 - source.thinnerValue;
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
		var residue = 100 - source.thinnerValue;
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
	
	function baseChange(base, source){
		// This should be called only if 'source' contains nic base, but checking anyway
		if(source.hasOwnProperty('baseValues')) {
			if(base.nicStrength > 0) {
				source.baseValues.base = Number((source.nicStrength / base.nicStrength * 100).toFixed(2));
				source.baseValues.pg = Number((source.baseValues.base * base.pgValue / 100).toFixed(2)),
				source.baseValues.vg = Number((source.baseValues.base * base.vgValue / 100).toFixed(2)),
				source.baseValues.thinner = Number((source.baseValues.base * base.thinnerValue / 100).toFixed(2));
			}
			
			/*source.baseValues.base = source.nicStrength / base.nicStrength * 100;
			source.baseValues.pg = source.baseValues.base * base.pgValue / 100,
			source.baseValues.vg = source.baseValues.base * base.vgValue / 100,
			source.baseValues.thinner = source.baseValues.base * base.thinnerValue / 100;

			source.baseValues.base = parseFloat(source.baseValues.base.toFixed(2)),
			source.baseValues.pg = parseFloat(source.baseValues.pg.toFixed(2)),
			source.baseValues.vg = parseFloat(source.baseValues.vg.toFixed(2)),
			source.baseValues.thinner = parseFloat(source.baseValues.thinner.toFixed(2));*/

			source.$vgSlider.update({
				from_min: (source.baseValues.vg),
				from_max: (100 - source.thinnerValue - source.baseValues.pg)
			});
			source.$pgSlider.update({
				from_min: (source.baseValues.pg),
				from_max: (100 - source.thinnerValue - source.baseValues.vg)
			});
			source.$thinnerSlider.update({ from_min: Math.ceil(source.baseValues.thinner) });
			source.$pgFlavorsSlider.update({ from_max: Math.floor(source.pgValue - source.baseValues.pg) });
			source.$vgFlavorsSlider.update({ from_max: Math.floor(source.vgValue - source.baseValues.vg) });
			
			source.$vgInput.attr("min", (source.baseValues.vg));
			source.$pgInput.attr("min", (source.baseValues.pg));
			source.$thinnerInput.attr("min", source.baseValues.thinner);
			source.$pgFlavorsInput.attr("max", source.vgValue - source.baseValues.pg);
			source.$vgFlavorsInput.attr("max", source.vgValue - source.baseValues.vg);

			console.log("base: " + source.baseValues.base);
			console.log("pg: " + source.baseValues.pg);
			console.log("vg: " + source.baseValues.vg);
			console.log("thinner: " + source.baseValues.thinner);
			/*if(parseFloat(source.baseValues.pg + source.baseValues.vg + source.baseValues.thinner).toFixed(2) != source.baseValues.base) {
				alert("Base proportion mismatch!");
				console.log(Array(31).join("^"));
			}*/
		}
	}

	function flavorsChange(source) {
		var vgLimit = source.vgValue,
			pgLimit = source.pgValue;

		if(source.hasOwnProperty('baseValues')) {
			vgLimit -= source.baseValues.vg;
			pgLimit -= source.baseValues.pg;
		}

		source.$vgFlavorsSlider.update({ from_max: Math.floor(vgLimit) });
		source.$vgFlavorsInput.attr("max", vgLimit);
		checkInputRange(source.$vgFlavorsInput);
		if(source.vgFlavorsValue > vgLimit) {
			source.vgFlavorsValue = vgLimit;
		} 

		source.$pgFlavorsSlider.update({ from_max: Math.floor(pgLimit) });
		source.$pgFlavorsInput.attr("max", pgLimit);
		checkInputRange(source.$pgFlavorsInput);
		if(source.pgFlavorsValue > pgLimit) {
			source.pgFlavorsValue = pgLimit;
		} 
	}

	function thinnerChange(value, source) {
		var delta = value - source.thinnerValue,
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

		source.$vgSlider.update({from: source.vgValue, from_max: residue});
		source.$pgSlider.update({from: source.pgValue, from_max: residue});
		source.$vgInput.val(source.vgValue);
		source.$vgInput.attr("max", residue);
		source.$pgInput.val(source.pgValue);
		source.$pgInput.attr("max", residue);
	}

	baseChange(base, juice);
	calcLiquid();
	

	// PG/VG sliders and inputs are synced to get 100% in total
	// Base sliders
	base.$vgSlider.update({
		onChange: function(data) {
			pgVgSliderChange("vg", data.from, base);
			baseChange(base, juice);
			calcLiquid();
		}
	});
	
	base.$pgSlider.update({
		onChange: function(data) {
			pgVgSliderChange("pg", data.from, base);
			baseChange(base, juice);
			calcLiquid();
		}
	});
	
	base.$thinnerSlider.update({
		onChange: function(data) {
			base.$thinnerInput.val(data.from);
			thinnerChange(data.from, base);
			
			base.thinnerValue = data.from;
			baseChange(base, juice);
			calcLiquid();
		}
	});

	base.$nicSlider.update({
		onChange: function(data) {
			base.$nicInput.val(data.from);
			base.nicStrength = data.from;

			if(juice.nicStrength > data.from) {
				juice.nicStrength = data.from;
				juice.$nicSlider.update({ from: data.from });
				juice.$nicInput.val(data.from);
			}
			juice.$nicSlider.update({ from_max: data.from });

			baseChange(base, juice);
			calcLiquid();
		}
	});
	
	// Base inputs
	base.$vgInput.change(function() {
		checkInputRange($(this));
		
		pgVgInputChange("vg", $(this).val(), base);
		baseChange(base, juice);
		calcLiquid();
	});
	
	base.$pgInput.change(function() {
		checkInputRange($(this));
		
		pgVgInputChange("pg", $(this).val(), base);
		baseChange(base, juice);
		calcLiquid();
	});

	base.$thinnerInput.change(function() {
		checkInputRange($(this));
		
		base.$thinnerSlider.update({ from: $(this).val() });
		thinnerChange($(this).val(), base);
		base.thinnerValue = $(this).val();
		baseChange(base, juice);
		calcLiquid();
	});

	base.$nicInput.change(function() {
		checkInputRange($(this));

		base.$nicSlider.update({ from: $(this).val() });
		base.nicStrength = $(this).val();
		baseChange(base, juice);
		calcLiquid();
	});
	
	// Juice sliders
	juice.$nicSlider.update({
		onChange: function(data) {
			if(data.from == 0) {
				if(!$("#basePanel").hasClass("disabled")) {
					$("#basePanel").addClass("disabled");
				}
			} else {
				if($("#basePanel").hasClass("disabled")) {
					$("#basePanel").removeClass("disabled");
				}
			}

			juice.$nicInput.val(data.from);
			juice.nicStrength = data.from;
			baseChange(base, juice);
			calcLiquid();
		}
	});

	juice.$vgSlider.update({
		//from_min: Math.ceil(juice.baseValues.vg),

		onChange: function(data) {
			pgVgSliderChange("vg", data.from, juice);
			flavorsChange(juice);
			calcLiquid();
		}
	});
	
	juice.$pgSlider.update({
		//from_min: Math.ceil(juice.baseValues.pg),

		onChange: function(data) {
			pgVgSliderChange("pg", data.from, juice);
			flavorsChange(juice);
			calcLiquid();
		}
	});
	
	juice.$thinnerSlider.update({
		from_min: juice.baseValues.thinner,

		onChange: function(data) {
			juice.$thinnerInput.val(data.from);
			thinnerChange(data.from, juice);
			juice.thinnerValue = data.from;
			calcLiquid();
		}
	});

	juice.$pgFlavorsSlider.update({
		from_max: juice.pgValue,
		onChange: function(data) {
			juice.$pgFlavorsInput.val(data.from);
			juice.pgFlavorsValue = data.from;
			calcLiquid();
		}
	});

	juice.$vgFlavorsSlider.update({
		from_max: juice.vgValue,
		onChange: function(data) {
			juice.$vgFlavorsInput.val(data.from);
			juice.vgFlavorsValue = data.from;
			calcLiquid();
		}
	});

	// Juice inputs
	juice.$nicInput.change(function() {
		checkInputRange($(this));
		juice.$nicSlider.update({ from: $(this).val() });
		juice.nicStrength = $(this).val();
		calcLiquid();
	});

	juice.$vgInput.change(function() {
		checkInputRange($(this));
		pgVgInputChange("vg", $(this).val(), juice);
		flavorsChange(juice);
		calcLiquid();
	});
	
	juice.$pgInput.change(function() {
		checkInputRange($(this));
		pgVgInputChange("pg", $(this).val(), juice);
		flavorsChange(juice);
		calcLiquid();
	});

	juice.$pgFlavorsInput.change(function() {
		checkInputRange($(this));
		juice.$pgFlavorsSlider.update({ from: $(this).val() });
		juice.pgFlavorsValue = $(this).val();
		calcLiquid();
	});
	
	juice.$vgFlavorsInput.change(function() {
		checkInputRange($(this));
		juice.$vgFlavorsSlider.update({ from: $(this).val() });
		juice.vgFlavorsValue = $(this).val();
		calcLiquid();
	});

	juice.$volumeInput.change(function() {
		checkInputRange($(this));
		juice.volume = $(this).val();
		calcLiquid();
	})
});

