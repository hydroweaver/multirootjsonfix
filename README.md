# multirootjsonfix
Custom multiroot JSON fix

Data downloaded from elastic search website : https://download.elastic.co/demos/kibana/gettingstarted/shakespeare_6.0.json

This data is in a multi root format for the BULK API request to work, which I didn't realize earlier! Regardless, this script works to pull valid JSON in parts from the file.
