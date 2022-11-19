using CreedHacks.Api.Data;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.AspNetCore.Mvc;

namespace CreedHacks.Api.Controllers
{
    public class OidcConfigurationController : Controller
    {
        private readonly ILogger<OidcConfigurationController> _logger;
        readonly ICartRepository _sessionRepository;

        public OidcConfigurationController(
            ICartRepository sessionRepository,
            IClientRequestParametersProvider clientRequestParametersProvider,
            ILogger<OidcConfigurationController> logger)
        {
            ClientRequestParametersProvider = clientRequestParametersProvider;
            _sessionRepository = sessionRepository;
            _logger = logger;
        }

        public IClientRequestParametersProvider ClientRequestParametersProvider { get; }

        [HttpGet("_configuration/{userId}")]
        public IActionResult GetClientRequestParameters([FromRoute] int userId)
        {
            var result = _sessionRepository.GetSessionAsync(userId);
            var parameters = ClientRequestParametersProvider.GetClientParameters(HttpContext, userId.ToString());
            return Ok(parameters);
        }
    }
}