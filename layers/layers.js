var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ProyectosCAFPointcopiar_1 = new ol.format.GeoJSON();
var features_ProyectosCAFPointcopiar_1 = format_ProyectosCAFPointcopiar_1.readFeatures(json_ProyectosCAFPointcopiar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProyectosCAFPointcopiar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProyectosCAFPointcopiar_1.addFeatures(features_ProyectosCAFPointcopiar_1);
var lyr_ProyectosCAFPointcopiar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProyectosCAFPointcopiar_1, 
                style: style_ProyectosCAFPointcopiar_1,
                interactive: true,
    title: 'Proyectos CAF Point copiar<br />\
    <img src="styles/legend/ProyectosCAFPointcopiar_1_0.png" /> Energía<br />\
    <img src="styles/legend/ProyectosCAFPointcopiar_1_1.png" /> Ferroviario<br />\
    <img src="styles/legend/ProyectosCAFPointcopiar_1_2.png" /> Logística e Integración<br />\
    <img src="styles/legend/ProyectosCAFPointcopiar_1_3.png" /> Movilidad<br />\
    <img src="styles/legend/ProyectosCAFPointcopiar_1_4.png" /> Otros<br />\
    <img src="styles/legend/ProyectosCAFPointcopiar_1_5.png" /> TICs<br />\
    <img src="styles/legend/ProyectosCAFPointcopiar_1_6.png" /> Vialidad<br />\
    <img src="styles/legend/ProyectosCAFPointcopiar_1_7.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_ProyectosCAFPointcopiar_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ProyectosCAFPointcopiar_1];
lyr_ProyectosCAFPointcopiar_1.set('fieldAliases', {'id': 'id', 'País': 'País', 'Nombre_Op': 'Nombre_Op', 'Año_Aprob': 'Año_Aprob', 'Monto': 'Monto', 'Sector': 'Sector', 'ODS': 'ODS', 'ODS_Name': 'ODS_Name', 'Nombre_Lar': 'Nombre_Lar', 'lon': 'lon', 'lat': 'lat', });
lyr_ProyectosCAFPointcopiar_1.set('fieldImages', {'id': 'TextEdit', 'País': 'TextEdit', 'Nombre_Op': 'TextEdit', 'Año_Aprob': 'Range', 'Monto': 'TextEdit', 'Sector': 'TextEdit', 'ODS': 'Range', 'ODS_Name': 'TextEdit', 'Nombre_Lar': 'TextEdit', 'lon': '', 'lat': '', });
lyr_ProyectosCAFPointcopiar_1.set('fieldLabels', {'id': 'no label', 'País': 'no label', 'Nombre_Op': 'inline label', 'Año_Aprob': 'inline label', 'Monto': 'inline label', 'Sector': 'inline label', 'ODS': 'no label', 'ODS_Name': 'no label', 'Nombre_Lar': 'no label', 'lon': 'no label', 'lat': 'no label', });
lyr_ProyectosCAFPointcopiar_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});