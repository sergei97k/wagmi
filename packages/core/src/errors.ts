export class AddChainError extends Error {
  name = 'AddChainError'
  message = 'Error adding chain'
}

export class ChainNotConfiguredError extends Error {
  name = 'ChainNotConfigured'
  message = 'Chain not configured'
}

export class ConnectorAlreadyConnectedError extends Error {
  name = 'ConnectorAlreadyConnectedError'
  message = 'Connector already connected'
}

export class ConnectorNotFoundError extends Error {
  name = 'ConnectorNotFoundError'
  message = 'Connector not found'
}

export class SwitchChainError extends Error {
  name = 'SwitchChainError'
  message = 'Error switching chain'
}

export class SwitchChainNotSupportedError extends Error {
  name = 'SwitchChainNotSupportedError'
  message = 'Switch chain not supported by connector'
}

export class UserRejectedRequestError extends Error {
  name = 'UserRejectedRequestError'
  message = 'User rejected request'
}
