using CreedHacks.Api.Data;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.AspNetCore.Mvc;

namespace CreedHacks.Api.Controllers
{
    public class OidcConfigurationController : Controller
    {
        private readonly ILogger<OidcConfigurationController> _logger;
        readonly IMetroRepository _sessionRepository;

        public OidcConfigurationController(
            IMetroRepository sessionRepository,
            IClientRequestParametersProvider clientRequestParametersProvider,
            ILogger<OidcConfigurationController> logger)
        {
            ClientRequestParametersProvider = clientRequestParametersProvider;
            _sessionRepository = sessionRepository;
            _logger = logger;
        }

        public IClientRequestParametersProvider ClientRequestParametersProvider { get; }

        [HttpGet("_configuration/{userId}")]
        public IActionResult GetClientRequestParameters([FromRoute] string userId)
        {
            var parameters = ClientRequestParametersProvider.GetClientParameters(HttpContext, userId);
            return Ok(parameters);
        }
    }
}