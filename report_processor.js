"use strict";

let fs = require('fs');
let jv = require('junit-viewer')

let reports_folder = './reports'
let xml_folder = reports_folder + '/raw_results'

let archive = reports_folder + '/archived_results'
let archive_html = reports_folder + '/archived_html'

fs.readdir(xml_folder, (err, contents) => {

    contents.map( (item) => {

        // process junit xml to html
        let parsedData = jv.parse(xml_folder + '/' + item)
        let renderData = jv.render(parsedData)

        let html = reports_folder + '/' + item + '.html'
        // create html file
        fs.writeFileSync( html, renderData ); 

        var now = Date.now();

        // copy xml file to archive
        fs.createReadStream(xml_folder + '/' + item).pipe(fs.createWriteStream(archive + '/' + now + '.xml'));

        // copy html file to archive
        fs.createReadStream(html).pipe(fs.createWriteStream(archive_html + '/' + now + '.html'));

    })    

})