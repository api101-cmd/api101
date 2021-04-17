function api101() {
    const axios = require('axios')

    const obfuscate = async (key,script,options) => {

    const data = {
        key: key,
        script:script,
        options: {
            DisableSuperOperators: options.DisableSuperOperators ?? false,
            MaximumSecurityEnabled: options.MaximumSecurityEnabled ?? false,
            EncryptAllStrings: options.EncryptAllStrings ?? false,
            DisableAllMacros: options.DisableAllMacros ?? false,
            EnhancedOutput: options.EnhancedOutput ?? false,
            CompressedOutput: options.CompressedOutput ?? false,
            PremiumFormat: options.PremiumFormat ?? false,
            ByteCodeMode: options.ByteCodeMode ?? "Default"
        }
    }

    const obf = await axios.post('https://api.psu.dev/obfuscate',data)

    return obf
}

module.exports = {obfuscate}
}