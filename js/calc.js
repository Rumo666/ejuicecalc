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
		from: 50,

		onStart: function(data) {
			$("#nicBase").val(data.from);
		}
	});

	// Juice sliders
	$("#juiceVolumeSlider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 1000,
		step: 1,
		postfix: "мл",
		from: 30,

		onStart: function(data) {
			$("#juiceVolume").val(data.from);
		}
	});
	
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

	
	var $vgBaseSlider = $("#vgBaseSlider").data("ionRangeSlider");
	var $pgBaseSlider = $("#pgBaseSlider").data("ionRangeSlider");
	var $diluentBaseSlider = $("#diluentBaseSlider").data("ionRangeSlider");
	var $nicBaseSlider = $("#nicBaseSlider").data("ionRangeSlider");
	
	var vgBaseValue = $("#vgBaseSlider").data("from");
	var pgBaseValue = $("#pgBaseSlider").data("from");
	var diluentBaseValue = $("#diluentBaseSlider").data("from");
	var nicBaseValue = $("#nicBaseSlider").data("from");

	var juiceVolume = $("#juiceVolumeSlider").data("from");

	var vgJuiceValue = $("#vgJuiceSlider").data("from");
	var pgJuiceValue = $("#pgJuiceSlider").data("from");
	var diluentJuiceValue = $("#diluentJuiceSlider").data("from");
	var pgFlavorsValue = $("pgFlavorsSlider").data("from");
	var vgFlavorsValue = $("#vgFlavorsSlider").data("from");
	var nicJuiceStrength = $("#nicJuiceSlider").data("from");

	$("#baseVolume").html(100);

	function calcLiquid() {
		vgJuiceVolume = ((vgBaseValue - vgFlavorsVolume) / 100.0) * volume;
		pgJuiceVolume = ((pgBaseValue - pgFlavorsVolume) / 100.0) * volume;
		pgFlavorsVolume = (pgFlavorsValue / 100.0) * volume;
		vgFlavorsVolume = (vgFlavorsValue / 100.0) * volume;
		diluentJuiceVolume = (diluentBaseSlider / 100.0) * volume;
	}

	// Sync PG/VG sliders and their inputs
	$vgBaseSlider.update({
		onChange: function(data) {
			$("#vgBase").val(data.from);
			vgBaseValue = data.from;

			pgBaseValue = (100 - diluentBaseValue) - vgBaseValue;

			$pgBaseSlider.update({from: pgBaseValue});
			$("#pgBase").val(pgBaseValue);
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
			$("#vgBase").attr("max", residue);
			$("#pgBase").val(pgBaseValue);
			$("#pgBase").attr("max", residue);

			diluentBaseValue = data.from;
		}
	});

	$nicBaseSlider.update({
		onChange: function(data) {
			$("#nicBase").val(data.from);
			nicBaseValue = data.from;
		}
	});

	// Watch if any of the inputs were changed
	$("#vgBase").on('keyup change', function() {
		var residue = 100 - diluentBaseValue;
		if($(this).val() < 0) {
			vgBaseValue = 0;
		} else if($(this).val() > residue) {
			vgBaseValue = residue;
		} else {
			vgBaseValue = $(this).val();
		}

		$vgBaseSlider.update({
			from: vgBaseValue
		});
		$pgBaseSlider.update({
			from: residue - vgBaseValue
		});
		$("#pgBase").val(residue - vgBaseValue);
	});
	
	$("#pgBase").on('keyup change', function() {
		$pgBaseSlider.update({
			from: $(this).val()
		});
		$vgBaseSlider.update({
			from: (100 - diluentBaseValue) - $(this).val()
		});
		$("#vgBase").val((100 - diluentBaseValue) - $(this).val());
	});

});

