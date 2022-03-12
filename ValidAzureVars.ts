const azureRegex = {
    applicationInsightsConnectionString: /\bInstrumentationKey=.{36}[;]\bIngestionEndpoint=https:\/\/.*\//
}

const azureRegions =
    [
        'eastus',
        'eastus2',
        'southcentralus',
        'westus2',
        'westus3',
        'australiaeast',
        'southeastasia',
        'northeurope',
        'swedencentral',
        'uksouth',
        'westeurope',
        'centralus',
        'northcentralus',
        'westus',
        'southafricanorth',
        'centralindia',
        'eastasia',
        'japaneast',
        'jioindiawest',
        'koreacentral',
        'canadacentral',
        'francecentral',
        'germanywestcentral',
        'norwayeast',
        'switzerlandnorth',
        'uaenorth',
        'brazilsouth',
        'centralusstage',
        'eastusstage',
        'eastus2stage',
        'northcentralusstage',
        'southcentralusstage',
        'westusstage',
        'westus2stage',
        'asia',
        'asiapacific',
        'australia',
        'brazil',
        'canada',
        'europe',
        'france',
        'germany',
        'global',
        'india',
        'japan',
        'korea',
        'norway',
        'southafrica',
        'switzerland',
        'uae',
        'uk',
        'unitedstates',
        'unitedstateseuap',
        'eastasiastage',
        'southeastasiastage',
        'centraluseuap',
        'eastus2euap',
        'westcentralus',
        'southafricawest',
        'australiacentral',
        'australiacentral2',
        'australiasoutheast',
        'japanwest',
        'jioindiacentral',
        'koreasouth',
        'southindia',
        'westindia',
        'canadaeast',
        'francesouth',
        'germanynorth',
        'norwaywest',
        'switzerlandwest',
        'ukwest',
        'uaecentral',
        'brazilsoutheast'
    ];