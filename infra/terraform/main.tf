# Minimal skeleton - do NOT run without reviewing and filling values
provider "aws" {
  region = "us-east-1"
}

resource "aws_vpc" "demo" {
  cidr_block = "10.0.0.0/16"
}

output "note" {
  value = "This is a minimal skeleton. Add subnets, security groups, ecs cluster/task/service, rds, and secrets as needed."
}
