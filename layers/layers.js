var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_paca_1 = new ol.format.GeoJSON();
var features_paca_1 = format_paca_1.readFeatures(json_paca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_paca_1.addFeatures(features_paca_1);
var lyr_paca_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_paca_1, 
                style: style_paca_1,
                interactive: false,
                title: '<img src="styles/legend/paca_1.png" /> paca'
            });
var format_fp_2 = new ol.format.GeoJSON();
var features_fp_2 = format_fp_2.readFeatures(json_fp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fp_2.addFeatures(features_fp_2);
var lyr_fp_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fp_2, 
                style: style_fp_2,
                interactive: false,
                title: '<img src="styles/legend/fp_2.png" /> fp'
            });
var format_fp3_3 = new ol.format.GeoJSON();
var features_fp3_3 = format_fp3_3.readFeatures(json_fp3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fp3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fp3_3.addFeatures(features_fp3_3);
var lyr_fp3_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fp3_3, 
                style: style_fp3_3,
                interactive: false,
                title: '<img src="styles/legend/fp3_3.png" /> fp3'
            });
var format_fp2_4 = new ol.format.GeoJSON();
var features_fp2_4 = format_fp2_4.readFeatures(json_fp2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fp2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fp2_4.addFeatures(features_fp2_4);
var lyr_fp2_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fp2_4, 
                style: style_fp2_4,
                interactive: false,
                title: '<img src="styles/legend/fp2_4.png" /> fp2'
            });
var format_foretdep1_5 = new ol.format.GeoJSON();
var features_foretdep1_5 = format_foretdep1_5.readFeatures(json_foretdep1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_foretdep1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_foretdep1_5.addFeatures(features_foretdep1_5);
var lyr_foretdep1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_foretdep1_5, 
                style: style_foretdep1_5,
                interactive: false,
                title: '<img src="styles/legend/foretdep1_5.png" /> foretdep1'
            });
var format_15minP_6 = new ol.format.GeoJSON();
var features_15minP_6 = format_15minP_6.readFeatures(json_15minP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15minP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15minP_6.addFeatures(features_15minP_6);
var lyr_15minP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_15minP_6, 
                style: style_15minP_6,
                interactive: true,
                title: '<img src="styles/legend/15minP_6.png" /> 15minP'
            });
var format_10minp_7 = new ol.format.GeoJSON();
var features_10minp_7 = format_10minp_7.readFeatures(json_10minp_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minp_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minp_7.addFeatures(features_10minp_7);
var lyr_10minp_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_10minp_7, 
                style: style_10minp_7,
                interactive: true,
                title: '<img src="styles/legend/10minp_7.png" /> 10minp'
            });
var format_5minP_8 = new ol.format.GeoJSON();
var features_5minP_8 = format_5minP_8.readFeatures(json_5minP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5minP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5minP_8.addFeatures(features_5minP_8);
var lyr_5minP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5minP_8, 
                style: style_5minP_8,
                interactive: true,
                title: '<img src="styles/legend/5minP_8.png" /> 5minP'
            });
var format_siterepro_9 = new ol.format.GeoJSON();
var features_siterepro_9 = format_siterepro_9.readFeatures(json_siterepro_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siterepro_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siterepro_9.addFeatures(features_siterepro_9);
var lyr_siterepro_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_siterepro_9, 
                style: style_siterepro_9,
                interactive: true,
                title: '<img src="styles/legend/siterepro_9.png" /> siterepro'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_paca_1.setVisible(true);lyr_fp_2.setVisible(true);lyr_fp3_3.setVisible(true);lyr_fp2_4.setVisible(true);lyr_foretdep1_5.setVisible(true);lyr_15minP_6.setVisible(true);lyr_10minp_7.setVisible(true);lyr_5minP_8.setVisible(true);lyr_siterepro_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_paca_1,lyr_fp_2,lyr_fp3_3,lyr_fp2_4,lyr_foretdep1_5,lyr_15minP_6,lyr_10minp_7,lyr_5minP_8,lyr_siterepro_9];
lyr_paca_1.set('fieldAliases', {'qc_id': 'qc_id', 'code_insee': 'code_insee', 'nom': 'nom', 'nuts2': 'nuts2', 'wikipedia': 'wikipedia', 'surf_km2': 'surf_km2', });
lyr_fp_2.set('fieldAliases', {'iidtn_frt': 'iidtn_frt', 'Lib_Forêt': 'Lib_Forêt', 'cinse_dep': 'cinse_dep', 'Surface': 'Surface', });
lyr_fp3_3.set('fieldAliases', {'iidtn_frt': 'iidtn_frt', 'Lib_Forêt': 'Lib_Forêt', 'cinse_dep': 'cinse_dep', 'Surface': 'Surface', });
lyr_fp2_4.set('fieldAliases', {'iidtn_frt': 'iidtn_frt', 'Lib_Forêt': 'Lib_Forêt', 'cinse_dep': 'cinse_dep', 'Surface': 'Surface', });
lyr_foretdep1_5.set('fieldAliases', {'iidtn_frt': 'iidtn_frt', 'Lib_Forêt': 'Lib_Forêt', 'cinse_dep': 'cinse_dep', 'Surface': 'Surface', });
lyr_15minP_6.set('fieldAliases', {'Tps_Min': 'Temps à pied (minute)', });
lyr_10minp_7.set('fieldAliases', {'Tps_Min': 'Temps à pied (minute)', });
lyr_5minP_8.set('fieldAliases', {'Tps_Min': 'Temps à pied (minute)', });
lyr_siterepro_9.set('fieldAliases', {'nom_site': 'Nom Site', 'nom_com': 'Nom Commune', 'nom_dep': 'Nom Départemernt', 'catégorie': 'Catégorie du site', 'nb_visteur': 'Nombre de visiteur à l\'année', 'ouverture ': 'Mois d\'ouverture', 'g / p': 'Gratuit/Payant', 'gestion': 'gestion', 'lieu': 'Nature du lieu', 'mention': 'Distinction', 'descript': 'Description', });
lyr_paca_1.set('fieldImages', {'qc_id': '', 'code_insee': 'TextEdit', 'nom': 'TextEdit', 'nuts2': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_km2': 'TextEdit', });
lyr_fp_2.set('fieldImages', {'iidtn_frt': 'TextEdit', 'Lib_Forêt': 'TextEdit', 'cinse_dep': 'TextEdit', 'Surface': 'TextEdit', });
lyr_fp3_3.set('fieldImages', {'iidtn_frt': 'TextEdit', 'Lib_Forêt': 'TextEdit', 'cinse_dep': 'TextEdit', 'Surface': 'TextEdit', });
lyr_fp2_4.set('fieldImages', {'iidtn_frt': 'TextEdit', 'Lib_Forêt': 'TextEdit', 'cinse_dep': 'TextEdit', 'Surface': 'TextEdit', });
lyr_foretdep1_5.set('fieldImages', {'iidtn_frt': 'TextEdit', 'Lib_Forêt': 'TextEdit', 'cinse_dep': 'TextEdit', 'Surface': 'TextEdit', });
lyr_15minP_6.set('fieldImages', {'Tps_Min': 'TextEdit', });
lyr_10minp_7.set('fieldImages', {'Tps_Min': 'TextEdit', });
lyr_5minP_8.set('fieldImages', {'Tps_Min': 'TextEdit', });
lyr_siterepro_9.set('fieldImages', {'nom_site': '', 'nom_com': '', 'nom_dep': '', 'catégorie': '', 'nb_visteur': '', 'ouverture ': '', 'g / p': '', 'gestion': '', 'lieu': '', 'mention': '', 'descript': '', });
lyr_paca_1.set('fieldLabels', {'qc_id': 'no label', 'code_insee': 'header label', 'nom': 'header label', 'nuts2': 'no label', 'wikipedia': 'inline label', 'surf_km2': 'inline label', });
lyr_fp_2.set('fieldLabels', {'iidtn_frt': 'no label', 'Lib_Forêt': 'no label', 'cinse_dep': 'no label', 'Surface': 'no label', });
lyr_fp3_3.set('fieldLabels', {'iidtn_frt': 'no label', 'Lib_Forêt': 'no label', 'cinse_dep': 'no label', 'Surface': 'no label', });
lyr_fp2_4.set('fieldLabels', {'iidtn_frt': 'no label', 'Lib_Forêt': 'no label', 'cinse_dep': 'no label', 'Surface': 'no label', });
lyr_foretdep1_5.set('fieldLabels', {'iidtn_frt': 'no label', 'Lib_Forêt': 'no label', 'cinse_dep': 'no label', 'Surface': 'no label', });
lyr_15minP_6.set('fieldLabels', {'Tps_Min': 'inline label', });
lyr_10minp_7.set('fieldLabels', {'Tps_Min': 'inline label', });
lyr_5minP_8.set('fieldLabels', {'Tps_Min': 'inline label', });
lyr_siterepro_9.set('fieldLabels', {'nom_site': 'inline label', 'nom_com': 'inline label', 'nom_dep': 'inline label', 'catégorie': 'inline label', 'nb_visteur': 'inline label', 'ouverture ': 'inline label', 'g / p': 'inline label', 'gestion': 'inline label', 'lieu': 'inline label', 'mention': 'inline label', 'descript': 'inline label', });
lyr_siterepro_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});